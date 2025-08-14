import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  const username = localStorage.getItem("username");

  return (
    <>
      <HeroSection />
      <main style={{ padding: "2rem", minHeight: "20vh" }}>
        {username ? (
          <h2>Welcome {username} 👋</h2>
        ) : (
          <>
            <h2>Welcome to TravelApp</h2>
            <p>Plan and book your trips easily and conveniently.</p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
