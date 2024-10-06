// src/pages/HomePage.jsx
import React from 'react';
import Layout from '../components/squelette/Layout'; // Assurez-vous d'importer le Layout

function HomePage() {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Welcome to MyApp</h1>
        <p>This is the homepage of MyApp. Use the navigation above to sign up or sign in.</p>
      </div>
    </Layout>
  );
}

export default HomePage;
