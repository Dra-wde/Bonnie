import React from 'react';

const DashboardPage = () => {
  // Sample data for featured bracelets
  const featuredBracelets = [
    { id: 1, name: 'Elegant Pearl Bracelet', image: '/images/bracelet1.jpg', price: '$39.99' },
    { id: 2, name: 'Bohemian Leather Bracelet', image: '/images/bracelet2.jpg', price: '$29.99' },
    { id: 3, name: 'Charm Beaded Bracelet Set', image: '/images/bracelet3.jpg', price: '$49.99' },
    // Add more featured bracelets as needed
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>

      <h3>Featured Bracelets</h3>
      <div className="bracelets">
        {featuredBracelets.map(bracelet => (
          <div key={bracelet.id} className="bracelet">
            <img src={bracelet.image} alt={bracelet.name} />
            <p>{bracelet.name}</p>
            <p>{bracelet.price}</p>
          </div>
        ))}
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
};

export default DashboardPage;
