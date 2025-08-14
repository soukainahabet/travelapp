import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpForm.css"; // même style

function SignInForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!form.email) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email invalide";

    if (!form.password) newErrors.password = "Mot de passe requis";
    else if (form.password.length < 6)
      newErrors.password = "6 caractères minimum";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:8084/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        // stocker le nom et token
        localStorage.setItem("username", data.name);
        localStorage.setItem("token", data.token || "");

        setMessage(`Bienvenue ${data.name} (${data.email})`);
        navigate("/"); // redirection vers home
      } else {
        setMessage("Identifiants invalides");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur serveur");
    }
  };

  return (
    <div className="signup-card">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {errors.password && <small>{errors.password}</small>}
        </div>

        <button type="submit" className="btn">Se connecter</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignInForm;
