import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import "../styles/SignUpForm.css"; // ton CSS avec .signup-card etc.

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const result = await authService.register(
        formData.email,
        formData.password,
        formData.name,
        formData.phone
      );
      setMessage("Inscription réussie ! Redirection vers la connexion...");
      setFormData({ email: "", password: "", name: "", phone: "" });

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (err) {
      setMessage("Échec de l'inscription. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup-card">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {message && (
          <div
            style={{
              color: message.includes("réussie") ? "green" : "red",
              marginBottom: "1rem",
            }}
          >
            {message}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="btn"
          style={{ width: "100%", padding: "0.5rem" }}
        >
          {loading ? "Inscription en cours..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
}
