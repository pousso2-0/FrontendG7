import React, { useState, useCallback } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import "../../assets/css/SignUpSimple.css";

const SignUpSimple = () => {
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    password: "",
    type: "",
    profilePhotoUrl: "",
    bio: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await authService.register(formData);
      console.log("Registration successful:", response);
      navigate("/sign-in");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(JSON.stringify(err.response.data, null, 2));
      } else {
        setError("Une erreur est survenue lors de l'inscription.");
      }
    }
  }, [formData, navigate]);

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Inscrivez-vous</h2>
        {error && <Alert variant="danger"><pre>{error}</pre></Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Votre nom complet</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Adresse e-mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez un type</option>
              <option value="CLIENT">Client</option>
              <option value="TAILLEUR">Tailleur</option>
              <option value="VENDEUR">Vendeur</option>
              <option value="ADMIN">Admin</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>URL de la photo de profil</Form.Label>
            <Form.Control
              type="url"
              name="profilePhotoUrl"
              value={formData.profilePhotoUrl}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            S'inscrire
          </Button>
          <p className="mt-3">
            <Link to="/sign-in">Vous avez déjà un compte ? Connexion</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUpSimple;