import React, { useState } from 'react';
import './WaistBeadsSection.css'; // Import the CSS file

const WaistBeadsSection = () => {
  // Define state variables for size, type, and price
  const [selectedSize, setSelectedSize] = useState('0-31');
  const [selectedType, setSelectedType] = useState('Sand');
  const [price, setPrice] = useState(20); // Initial price for 0-31 size range

  // Function to handle size selection change
  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    updatePrice(newSize, selectedType);
  };

  // Function to handle type selection change
  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    updatePrice(selectedSize, newType);
  };

  // Function to update price based on selected size and type
  const updatePrice = (size, type) => {
    let basePrice = 20; // Default base price
    if (size === '32-41') {
      basePrice = 25;
    } else if (size === '42-61') {
      basePrice = 30;
    } else if (size === '62-71') {
      basePrice = 35;
    } else if (size === '72-81') {
      basePrice = 40;
    }

    // Adjust price based on selected type
    if (type.includes('Agate')) {
      basePrice += 5;
    }
    if (type.includes('Vinyl')) {
      basePrice += 10;
    }

    setPrice(basePrice);
  };

  return (
    <div className="waist-beads-container">
      <h2>Waist Beads</h2>
      <div>
        <label htmlFor="sizeSelect">Select Size:</label>
        <select id="sizeSelect" value={selectedSize} onChange={handleSizeChange}>
          <option value="0-31">0-31</option>
          <option value="32-41">32-41</option>
          <option value="42-61">42-61</option>
          <option value="62-71">62-71</option>
          <option value="72-81">72-81</option>
        </select>
      </div>
      <div>
        <label htmlFor="typeSelect">Select Type:</label>
        <select id="typeSelect" value={selectedType} onChange={handleTypeChange}>
          <option value="Sand">Sand</option>
          <option value="Sand and Agate">Sand and Agate</option>
          <option value="Sand and Agate and Vinyl">Sand and Agate and Vinyl</option>
        </select>
      </div>
      <div>
        <h3>Price: ${price}</h3>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default WaistBeadsSection;
