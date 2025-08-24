import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null; // Render nothing while redirecting
  }

  return (
    <main style={{ minHeight: "80vh", padding: "2rem" }}>
      <SignInForm />
    </main>
  );
}
