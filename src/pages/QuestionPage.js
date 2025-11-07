import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, questions } from '../data/triviaData';
import { isQuestionAnswered, markQuestionAnswered } from '../utils/storage';
import './QuestionPage.css';

function QuestionPage() {
  const { categoryId, questionId } = useParams();
  const navigate = useNavigate();
  
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const category = categories.find(cat => cat.id === categoryId);
  const categoryQuestions = questions[categoryId] || [];
  const question = categoryQuestions.find(q => q.id === parseInt(questionId));

  useEffect(() => {
    // Load answered state from localStorage
    const answered = isQuestionAnswered(categoryId, parseInt(questionId));
    setIsAnswered(answered);
  }, [categoryId, questionId]);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleMarkAnswered = (e) => {
    const checked = e.target.checked;
    setIsAnswered(checked);
    markQuestionAnswered(categoryId, parseInt(questionId), checked);
  };

  if (!category || !question) {
    return (
      <div className="question-page">
        <h1>Question not found</h1>
        <button onClick={() => navigate('/')}>Back to Categories</button>
      </div>
    );
  }

  return (
    <div className="question-page">
      <div className="question-header">
        <h2 className="category-name" style={{ color: category.color }}>
          {category.name} - Question {questionId}
        </h2>
      </div>

      <div className="question-content">
        <div className="question-text">
          {question.question}
        </div>

        {question.image && (
          <div className="question-image">
            <img src={question.image} alt="Question visual" />
          </div>
        )}

        <div className="answer-controls">
          {!showAnswer ? (
            <button 
              className="answer-button show-answer"
              onClick={handleToggleAnswer}
            >
              Show Answer
            </button>
          ) : (
            <>
              <div className="answer-text">
                <strong>Answer:</strong> {question.answer}
              </div>
              <button 
                className="answer-button hide-answer"
                onClick={handleToggleAnswer}
              >
                Hide Answer
              </button>
            </>
          )}
        </div>

        <div className="mark-answered-control">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isAnswered}
              onChange={handleMarkAnswered}
            />
            <span className="checkbox-text">Mark as Answered</span>
          </label>
        </div>

        <button 
          className="back-button"
          onClick={() => navigate(`/category/${categoryId}`)}
        >
          Back to Questions
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
