import React from "react";
import SignInForm from "../components/SignInForm";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const { isAuthenticated, user, logout } = useAuth();

  if (isAuthenticated) {
    return (
      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={logout} style={{ padding: '0.5rem 1rem' }}>
            Logout
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "80vh", padding: "2rem" }}>
      <SignInForm />
    </main>
  );
}
