import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return React.createElement(
    'nav',
    { className: 'navbar navbar-expand-lg navbar-light bg-light' },
    React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        Link,
        { to: '/', className: 'navbar-brand' },
        'MyApp'
      ),
      React.createElement(
        'button',
        {
          className: 'navbar-toggler',
          type: 'button',
          'data-bs-toggle': 'collapse',
          'data-bs-target': '#navbarNav',
          'aria-controls': 'navbarNav',
          'aria-expanded': 'false',
          'aria-label': 'Toggle navigation'
        },
        React.createElement('span', { className: 'navbar-toggler-icon' })
      ),
      React.createElement(
        'div',
        { className: 'collapse navbar-collapse', id: 'navbarNav' },
        React.createElement(
          'ul',
          { className: 'navbar-nav ms-auto' },
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              Link,
              { to: '/signup', className: 'nav-link' },
              'Sign Up'
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              Link,
              { to: '/sign-in', className: 'nav-link' },
              'Sign In'
            )
          )
        )
      )
    )
  );
}

export default NavBar;
