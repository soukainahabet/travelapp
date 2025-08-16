import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Appel au backend pour authentification
      const response = await axios.post('http://localhost:8084/api/auth/login', {
        email,
        password
      });

      // Vérifie que token et user existent
      const data = response.data;
      if (!data || !data.token || !data.user) {
        setError('Réponse du serveur invalide.');
        return;
      }

      // Stocker token et infos utilisateur dans localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('isLoggedIn', 'true');

      // Redirection après connexion
      navigate('/');
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || 'Email ou mot de passe incorrect.';
      setError(message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Se connecter</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" style={{ width: '100%' }}>Connexion</button>
      </form>
    </div>
  );
}
