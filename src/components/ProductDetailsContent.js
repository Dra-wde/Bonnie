// ProductDetailsContent.js
import React from 'react';
import './ProductDetailsContent.css'; // Import the CSS file

const ProductDetailsContent = ({ product }) => {
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
