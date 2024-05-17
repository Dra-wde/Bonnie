// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component
import './HomePage.css'; // Import CSS file for styling

const HomePage = () => {
  // Dummy data for featured products
  const featuredProducts = [
    { id: 1, name: 'Waist Beads', image: 'waist-beads.jpg', price: '$29.99' },
    { id: 2, name: 'Anklets', image: 'anklets.jpg', price: '$19.99' },
    { id: 3, name: 'Bracelets', image: 'bracelets.jpg', price: '$24.99' },
  ];

  return (
    <div className="homepage">
      <header className="hero">
        <h1 className="hero-title">Discover Unique Jewelry Pieces</h1>
        <p className="hero-description">Explore our collection of handmade waist beads, anklets, bracelets, and more.</p>
        <Link to="/shop" className="hero-button">Shop Now</Link>
      </header>

      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
 
      <section className="about-us">
        <div className="about-us-content">
          <h2 className="section-title">About Us</h2>
          <Link to="/about" className="about-us-link">Learn More</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p className="footer-text">© 2024 Your E-Commerce Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
