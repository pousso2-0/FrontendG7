import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        email,
        password
      });
      
      // Supposons que le serveur renvoie un token JWT
      const { token } = response.data;
      
      // Stockez le token dans le localStorage ou dans un état global
      localStorage.setItem('token', token);
      
      // Rediriger l'utilisateur vers la page d'accueil ou le tableau de bord
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email address</label>
        <input 
          type="email" 
          className="form-control mb-0" 
          id="email" 
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
        <Link to="/forgot-password" className="float-end">Forgot password?</Link>
        <input 
          type="password" 
          className="form-control mb-0" 
          id="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="d-inline-block w-100">
        <div className="form-check d-inline-block mt-2 pt-1">
          <input type="checkbox" className="form-check-input" id="customCheck11" />
          <label className="form-check-label" htmlFor="customCheck11">Remember Me</label>
        </div>
        <button type="submit" className="btn btn-primary float-end">Sign in</button>
      </div>
    </form>
  );
};

export default SignInForm;