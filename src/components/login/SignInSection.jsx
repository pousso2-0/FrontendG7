// src/components/SignInSection.jsx
import React from 'react';
import SignInForm from './SignInForm';
import SignInDetail from './SignInSlider';

function SignInSection() {
  return React.createElement(
    'section',
    { className: 'sign-in-page' },
    React.createElement(
      'div',
      { id: 'container-inside' },
      React.createElement('div', { id: 'circle-small' }),
      React.createElement('div', { id: 'circle-medium' }),
      React.createElement('div', { id: 'circle-large' }),
      React.createElement('div', { id: 'circle-xlarge' }),
      React.createElement('div', { id: 'circle-xxlarge' })
    ),
    React.createElement(
      'div',
      { className: 'container p-0' },
      React.createElement(
        'div',
        { className: 'row no-gutters' },
        React.createElement(
          'div',
          { className: 'col-md-6 text-center pt-5' },
          React.createElement(SignInDetail)
        ),
        React.createElement(
          'div',
          { className: 'col-md-6 bg-white pt-5 pb-lg-0 pb-5' },
          React.createElement(SignInForm)
        )
      )
    )
  );
}

export default SignInSection;
