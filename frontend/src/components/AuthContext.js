import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('jwtToken'));
  const [userEmail, setUserEmail] = useState(null);

  // Optionnel : extraire email du token JWT pour userEmail (si besoin)
  useEffect(() => {
    if (token) {
      // Décoder token si tu veux, ici simple extraction du payload (optionnel)
      // ou appeler backend pour infos utilisateur
      setUserEmail("Utilisateur connecté"); // placeholder
    } else {
      setUserEmail(null);
    }
  }, [token]);

  const login = (jwtToken) => {
    localStorage.setItem('jwtToken', jwtToken);
    setToken(jwtToken);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setToken(null);
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ token, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
