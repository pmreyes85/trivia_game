import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, questions, getQuestionPoints } from '../data/triviaData';
import CategoryIcon from '../components/CategoryIcon';
import { getAward, isQuestionAnswered } from '../utils/storage';
import './CategoriesPage.css';

// Jeopardy-style board: one column per category, one card per question.
// Card color shows who answered: red = team 1, blue = team 2, grey = no one.
function CategoriesPage() {
  const navigate = useNavigate();
  const rows = Math.max(...categories.map((c) => (questions[c.id] || []).length));

  // One shared grid with explicit cells, so rows line up across categories
  return (
    <div className="board" style={{ '--cols': categories.length, '--rows': rows }}>
      {categories.map((category, col) => (
        <React.Fragment key={category.id}>
          <div className="board-category" style={{ '--c': category.color, gridColumn: col + 1, gridRow: 1 }}>
            <CategoryIcon category={category} className="board-category-icon" />
            <span>{category.name}</span>
          </div>

          {(questions[category.id] || []).map((question, row) => {
            const award = getAward(category.id, question.id);
            // Answered before awards existed: show as "no one" style so it still reads as done
            const state =
              award === 1 ? 'won-1'
              : award === 2 ? 'won-2'
              : award === 0 || isQuestionAnswered(category.id, question.id) ? 'nobody'
              : '';
            return (
              <button
                key={question.id}
                className={`board-card ${state}`}
                style={{ '--c': category.color, gridColumn: col + 1, gridRow: row + 2 }}
                onClick={() => navigate(`/category/${category.id}/question/${question.id}`)}
                aria-label={`${category.name}, ${getQuestionPoints(question)} points${
                  award === 1 ? ', won by team 1' : award === 2 ? ', won by team 2' : state ? ', answered' : ''
                }`}
              >
                <span className="board-points num">{getQuestionPoints(question)}</span>
                {award === 0 && <span className="board-nobody">No one</span>}
              </button>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CategoriesPage;
