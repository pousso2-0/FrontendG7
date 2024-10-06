// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpSimple from './components/login/SignUpSimple';

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(NavBar),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(HomePage) }),
      React.createElement(Route, { path: '/signup', element: React.createElement(SignUpSimple) }),
      React.createElement(Route, { path: '/sign-in', element: React.createElement(SignInPage) })
    )
  );
}

export default App;
