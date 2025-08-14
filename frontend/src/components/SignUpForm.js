import React, { useState } from "react";
import "../styles/SignUpForm.css"; // ton CSS avec .signup-card etc.

function SignUpForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "USER",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Le nom est requis";
    if (!form.email) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email invalide";

    if (!form.phone) newErrors.phone = "Le téléphone est requis";
    else if (!/^[0-9]{8,15}$/.test(form.phone)) newErrors.phone = "Numéro invalide";

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
      const res = await fetch("http://localhost:8084/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      setMessage(text);
      if (res.ok) {
        setForm({
          email: "",
          password: "",
          role: "USER",
          name: "",
          phone: "",
        });
        setErrors({});
      }
    } catch (error) {
      setMessage("Erreur serveur");
    }
  };

  return (
    <div className="signup-card">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <small>{errors.name}</small>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
          {errors.password && <small>{errors.password}</small>}
        </div>

        <div className="form-group">
          <label>Rôle</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="USER">Utilisateur</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn">S'inscrire</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignUpForm;
