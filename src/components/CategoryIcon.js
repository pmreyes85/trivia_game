import React from 'react';

// A category's icon: an image (iconImage) if set, otherwise an emoji (icon).
function CategoryIcon({ category, className = '' }) {
  if (category.iconImage) {
    return <img className={`category-icon-img ${className}`} src={category.iconImage} alt="" aria-hidden="true" />;
  }
  return <span className={className} aria-hidden="true">{category.icon || '⭐'}</span>;
}

export default CategoryIcon;
