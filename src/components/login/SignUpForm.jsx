import React, { useState, useCallback } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    profilePicture: "",
    bio: "",
    location: "",
    gender: "",
    phone: "",
    skills: [],
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      setFormData({ ...formData, skills: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log("Données du formulaire envoyées:", formData);
      const response = await authService.register(formData);
      console.log("Réponse du serveur:", response);
      navigate("/sign-in");
    } catch (err) {
      console.error("Erreur complète:", err);
      if (err.response) {
        console.error("Données de la réponse d'erreur:", err.response.data);
        setError(JSON.stringify(err.response.data, null, 2));
      } else {
        setError("Une erreur est survenue lors de l'inscription.");
      }
    }
  }, [formData, navigate]);

  return (
    <div className="sign-in-from" style={{ maxHeight: "90vh", overflowY: "auto", padding: "20px" }}>
      <h1 className="mb-0">Sign Up</h1>
      <p>Enter your details to create an account.</p>
      {error && <Alert variant="danger"><pre>{error}</pre></Alert>}
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
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
            <option value="">Select...</option>
            <option value="CLIENT">Client</option>
            <option value="TAILLEUR">Tailleur</option>
            <option value="VENDEUR">Vendeur</option>
            <option value="ADMIN">Admin</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Profile Picture URL</Form.Label>
          <Form.Control
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
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
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Skills (comma separated)</Form.Label>
          <Form.Control
            type="text"
            name="skills"
            value={formData.skills.join(",")}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-inline-block w-100">
          <div className="form-check d-inline-block mt-2 pt-1">
            <input type="checkbox" className="form-check-input" id="customCheck1" required />
            <label className="form-check-label" htmlFor="customCheck1">I accept <Link to="#">Terms and Conditions</Link></label>
          </div>
          <Button type="submit" className="btn btn-primary float-end">Sign Up</Button>
        </div>
        <div className="sign-info">
          <span className="dark-color d-inline-block line-height-2">Already Have Account? <Link to="/sign-in">Log In</Link></span>
          <ul className="iq-social-media">
            <li><a href="#"><i className="ri-facebook-box-line"></i></a></li>
            <li><a href="#"><i className="ri-twitter-line"></i></a></li>
            <li><a href="#"><i className="ri-instagram-line"></i></a></li>
          </ul>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
