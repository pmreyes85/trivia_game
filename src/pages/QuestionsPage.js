import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { categories, questions } from '../data/triviaData';
import { isQuestionAnswered } from '../utils/storage';
import './QuestionsPage.css';

function QuestionsPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const category = categories.find(cat => cat.id === categoryId);
  const categoryQuestions = questions[categoryId] || [];

  const handleQuestionClick = (questionId) => {
    navigate(`/category/${categoryId}/question/${questionId}`);
  };

  if (!category) {
    return (
      <div className="questions-page">
        <h1>Category not found</h1>
      </div>
    );
  }

  return (
    <div className="questions-page">
      <h1 className="page-title" style={{ color: category.color }}>
        {category.name}
      </h1>
      <div className="questions-grid">
        {categoryQuestions.map((question) => {
          const answered = isQuestionAnswered(categoryId, question.id);
          return (
            <button
              key={question.id}
              className={`question-button ${answered ? 'answered' : ''}`}
              style={{ 
                backgroundColor: answered ? '#95a5a6' : category.color,
                borderColor: category.color
              }}
              onClick={() => handleQuestionClick(question.id)}
            >
              {question.id}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionsPage;
