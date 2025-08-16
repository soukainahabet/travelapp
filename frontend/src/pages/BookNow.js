import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookNow() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    creationDate: "",
    seats: 1,
    specialRequests: "",
    status: "PENDING",
    hotelId: "",
    travelId: ""
  });
  const [hotels, setHotels] = useState([]);
  const [travels, setTravels] = useState([]);
  const [message, setMessage] = useState("");

  // Charger utilisateur, hôtels et voyages
  useEffect(() => {
    // Récupérer l'utilisateur connecté
    try {
      const storedUserRaw = localStorage.getItem("user");
      if (storedUserRaw) {
        setUser(JSON.parse(storedUserRaw));
      }
    } catch (err) {
      console.error("Erreur parsing user localStorage:", err);
    }

    // Charger hôtels et voyages
    axios.get("http://localhost:8084/api/hotels")
      .then(res => setHotels(res.data))
      .catch(err => console.error("Erreur fetch hotels:", err));

    axios.get("http://localhost:8084/api/travels")
      .then(res => setTravels(res.data))
      .catch(err => console.error("Erreur fetch travels:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setMessage("Utilisateur non connecté !");
      return;
    }

    const payload = {
      ...formData,
      customerId: user.id
    };

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:8084/api/bookings", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      setMessage("Réservation effectuée avec succès !");
      console.log(res.data);
    } catch (err) {
      console.error("Erreur lors de la réservation :", err);
      setMessage("Erreur lors de la réservation.");
    }
  };

  if (!user) {
    return <p>Vous devez être connecté pour réserver.</p>;
  }

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "2rem" }}>
      <h2>Réserver maintenant</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date de création :</label>
          <input
            type="date"
            name="creationDate"
            value={formData.creationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nombre de places :</label>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div>
          <label>Demande spéciale :</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status :</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="PENDING">PENDING</option>
            <option value="CONFIRMED">CONFIRMED</option>
            <option value="CANCELLED">CANCELLED</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
        <div>
          <label>Hôtel :</label>
          <select name="hotelId" value={formData.hotelId} onChange={handleChange} required>
            <option value="">--Choisir un hôtel--</option>
            {hotels.map(h => (
              <option key={h.id} value={h.id}>{h.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Voyage :</label>
          <select name="travelId" value={formData.travelId} onChange={handleChange} required>
            <option value="">--Choisir un voyage--</option>
            {travels.map(t => (
              <option key={t.id} value={t.id}>{t.title}</option>
            ))}
          </select>
        </div>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
}
