import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthContext"; // ton contexte d'auth
import axios from "axios";

export default function BookNow() {
  const { user, token } = useContext(AuthContext); // récupère user et token depuis le contexte
  const [travels, setTravels] = useState([]);
  const [selectedTravelId, setSelectedTravelId] = useState("");

  useEffect(() => {
    // Charger les voyages
    axios.get("http://localhost:8084/api/travels")
      .then(res => setTravels(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleBooking = () => {
    if (!user || !token) {
      alert("Vous devez être connecté pour réserver !");
      return;
    }

    axios.post(
      "http://localhost:8084/api/bookings",
      { travelId: selectedTravelId },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => alert("Réservation effectuée !"))
    .catch(err => console.error(err));
  };

  if (!user) {
    return (
      <div>
        <h2>Book Now</h2>
        <p>Vous devez être connecté pour réserver.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Book Now</h2>
      <select onChange={(e) => setSelectedTravelId(e.target.value)}>
        <option value="">-- Choisir un voyage --</option>
        {travels.map(travel => (
          <option key={travel.id} value={travel.id}>
            {travel.name}
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Réserver</button>
    </div>
  );
}
