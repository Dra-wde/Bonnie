import React, { useState } from 'react';
import './ProductPage.css'; // Import CSS file for styling

const ProductPage = ({ productName }) => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Waist Beads',
      description: 'Handcrafted with care.',
      image: 'waist-beads.jpg',
      price: '$20',
      sizes: ['Small', 'Medium', 'Large'], // Available sizes
      types: ['Sand', 'Sand and Agate', 'Sand and Agate and Vinyl'], // Available types
    },
    // Add more products as needed
  ];

  // Find the product by productName
  const product = products.find(product => product.name === productName);

  // State for selected size and types
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Handle size selection
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // Handle type selection
  const handleTypeChange = (event) => {
    const type = event.target.value;
    const isChecked = event.target.checked;

    // Update selectedTypes based on checkbox status
    if (isChecked) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      setSelectedTypes(selectedTypes.filter(item => item !== type));
    }
  };

  // Handle add to cart click
  const handleAddToCart = () => {
    if (isLoggedIn) {
      // Perform add to cart action
      console.log('Product added to cart:', { productName, selectedSize, selectedTypes });
    } else {
      // Show login modal
      setShowLoginModal(true);
    }
  };

  // If product not found, return a message
  if (!product) {
    return <div className="product-page">Product not found</div>;
  }

  return (
    <div className="product-page">
      <header>
        <h1>{product.name}</h1>
      </header>
      <main>
        <div className="product-details">
          <img src={require(`./assets/${product.image}`).default} alt={product.name} />
          <div className="description">
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            {/* Select size */}
            <select value={selectedSize} onChange={handleSizeChange}>
              <option value="">Select Size</option>
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            {/* Select type */}
            <div>
              <p>Select Type:</p>
              {product.types.map(type => (
                <label key={type}>
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={handleTypeChange}
                  />
                  {type}
                </label>
              ))}
            </div>
            {/* Add to cart button */}
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </main>
      <footer>
        <p>Contact us | Privacy Policy | Terms of Service</p>
      </footer>
      {/* Login modal */}
      {showLoginModal && (
        <div className="modal">
          <h2>Login Required</h2>
          {/* Add login form or button here */}
          <button onClick={() => setShowLoginModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
