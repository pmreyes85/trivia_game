import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, questions, getQuestionPoints, formatPoints } from '../data/triviaData';
import { isQuestionAnswered, getAward, setAward, getTimerSeconds } from '../utils/storage';
import CategoryIcon from '../components/CategoryIcon';
import CountdownTimer from '../components/CountdownTimer';
import './QuestionPage.css';

function QuestionPage({ teamNames, onScoreChange }) {
  const { categoryId, questionId } = useParams();
  const navigate = useNavigate();

  const [showAnswer, setShowAnswer] = useState(false);
  // Who got this question right: 1, 2, 0 (nobody) or null (not decided yet)
  const [award, setAwardState] = useState(null);
  // Bumped by the ↑ key to pause/resume the timer
  const [timerToggle, setTimerToggle] = useState(0);

  const category = categories.find(cat => cat.id === categoryId);
  const categoryQuestions = questions[categoryId] || [];
  const question = categoryQuestions.find(q => q.id === parseInt(questionId));
  const totalQuestions = categoryQuestions.length;
  const currentIndex = categoryQuestions.findIndex(q => q.id === parseInt(questionId));

  useEffect(() => {
    // Load who won this question from localStorage
    setAwardState(getAward(categoryId, parseInt(questionId)));
    // Always hide the answer when a new question is displayed
    setShowAnswer(false);
  }, [categoryId, questionId]);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // team: 1, 2 or 0 (nobody). Clicking the current choice again clears it.
  // Points always follow the award, so they are never added twice.
  const handleAward = (team) => {
    const points = getQuestionPoints(question);
    const next = award === team ? null : team;
    if (award === 1 || award === 2) onScoreChange(award, -points);
    if (next === 1 || next === 2) onScoreChange(next, points);
    setAward(categoryId, parseInt(questionId), next);
    setAwardState(next);
  };

  const goToQuestionByIndex = (index) => {
    if (!categoryQuestions.length) return;
    const clampedIndex = ((index % totalQuestions) + totalQuestions) % totalQuestions;
    const nextId = categoryQuestions[clampedIndex].id;
    navigate(`/category/${categoryId}/question/${nextId}`);
  };

  const handleNext = () => {
    goToQuestionByIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    goToQuestionByIndex(currentIndex - 1);
  };

  // Keyboard: → next question, ← previous question,
  // ↑ pause/resume the timer, ↓ show/hide the answer.
  // Re-attached every render so it always uses the current question.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.repeat || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setTimerToggle((n) => n + 1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setShowAnswer((v) => !v);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  if (!category || !question) {
    return (
      <div className="question-page not-found">
        <h1 className="page-title">Question not found</h1>
        <button className="pill-button" onClick={() => navigate('/')}>Back to Categories</button>
      </div>
    );
  }

  const points = getQuestionPoints(question);
  const len = question.question.length;
  const sizeClass = len > 160 ? 'size-xs' : len > 110 ? 'size-sm' : len > 60 ? 'size-md' : 'size-lg';

  return (
    <div className="question-page" style={{ '--c': category.color }}>
      <div className="question-topbar">
        <button
          className="pill-button ghost"
          onClick={() => navigate('/')}
        >
          ← Board
        </button>

        <div className="question-badge">
          <CategoryIcon category={category} />
          <span>{category.name}</span>
          <span className="badge-number num">#{questionId}</span>
          <span className="badge-points num">{formatPoints(points)}</span>
        </div>

        <div className="question-dots">
          {categoryQuestions.map((q, i) => (
            <span
              key={q.id}
              className={`dot ${i === currentIndex ? 'current' : ''} ${isQuestionAnswered(categoryId, q.id) ? 'done' : ''} ${
                getAward(categoryId, q.id) ? `won-${getAward(categoryId, q.id)}` : ''
              }`}
            />
          ))}
        </div>
      </div>

      <div className={`question-stage ${question.image ? 'with-image' : ''}`}>
        <div className="question-card">
          <div className={`question-text ${sizeClass}`}>{question.question}</div>

          <div className="answer-zone">
            {/* Timer stays mounted (hidden) while the answer shows, so hiding the answer keeps its state */}
            <div className="timer-slot" hidden={showAnswer}>
              <CountdownTimer seconds={getTimerSeconds()} stopped={showAnswer} toggleSignal={timerToggle} />
            </div>
            {showAnswer && (
              <div className="answer-reveal">
                <span className="answer-label">Answer</span>
                <span className="answer-text">{question.answer}</span>
              </div>
            )}
          </div>
        </div>

        {question.image && (
          <div className="question-image">
            <img src={question.image} alt="Question visual" />
          </div>
        )}
      </div>

      <div className="question-controls">
        <button className="nav-arrow" onClick={handlePrev} aria-label="Previous question">‹</button>

        <button
          className={`answer-button ${showAnswer ? 'hide' : 'show'}`}
          onClick={handleToggleAnswer}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>

        <div className="award-group" role="group" aria-label="Who got it right?">
          <span className="award-label">Correct:</span>
          {[1, 2].map((team) => (
            <button
              key={team}
              className={`award-button team-${team} ${award === team ? 'selected' : ''}`}
              onClick={() => handleAward(team)}
              aria-pressed={award === team}
              title={award === team ? 'Click again to undo' : `Give ${formatPoints(points)} to ${teamNames[team]}`}
            >
              <span className="award-points num">+{points}</span>
              <span className="award-team">{teamNames[team]}</span>
            </button>
          ))}
          <button
            className={`award-button nobody ${award === 0 ? 'selected' : ''}`}
            onClick={() => handleAward(0)}
            aria-pressed={award === 0}
            title={award === 0 ? 'Click again to undo' : 'Nobody got it right'}
          >
            Nobody
          </button>
        </div>

        <button className="nav-arrow" onClick={handleNext} aria-label="Next question">›</button>
      </div>
    </div>
  );
}

export default QuestionPage;
