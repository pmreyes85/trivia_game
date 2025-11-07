import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/triviaData';
import './CategoriesPage.css';

function CategoriesPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="categories-page">
      <h1 className="page-title">Select a Category</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-button"
            style={{ backgroundColor: category.color }}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
