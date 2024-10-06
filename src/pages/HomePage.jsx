// src/pages/HomePage.jsx
import React from 'react';

function HomePage() {
  return React.createElement(
    'div',
    { className: 'container mt-5' },
    React.createElement(
      'h1',
      null,
      'Welcome to MyApp'
    ),
    React.createElement(
      'p',
      null,
      'This is the homepage of MyApp. Use the navigation above to sign up or sign in.'
    )
  );
}

export default HomePage;
