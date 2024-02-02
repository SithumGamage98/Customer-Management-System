// src/Home.jsx
import React from 'react';
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Welcome to Our{' '}
        <span style={{ color: '#48D1CC' }}> Customer Management System 🙋</span>
      </h1>
      <p className="home-subtitle" style={{ color: '#4169E1' }}>
        Efficiently manage your customer data with our powerful system!
      </p>
      <img
        src="https://img.freepik.com/free-photo/two-men-political-suit-facing-each-other-shaking-hands_1409-7803.jpg?t=st=1706804519~exp=1706808119~hmac=fef73517a7649628e0f1c7cc9404c8dcf5df4865b7d0e5c4c529aae275ac2ac1&w=1380"
        alt="Background"
        className="home-image"
      />
    </div>
  );
};

export default Home;
