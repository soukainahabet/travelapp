import React, { useState } from 'react';
import axios from 'axios';

function BookingForm({ travelId, hotelId, customerId }) {
  const [formData, setFormData] = useState({
    creationDate: '',
    seats: '',
    specialRequests: '',
    status: 'PENDING'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Assure-toi que tu stockes bien le token à la connexion
    if (!token) {
      alert("Utilisateur non connecté !");
      return;
    }

    try {
      await axios.post(
        'http://localhost:8084/api/bookings',
        {
          creationDate: formData.creationDate,
          seats: formData.seats,
          specialRequests: formData.specialRequests,
          status: formData.status,
          customerId: customerId,
          hotelId: hotelId,
          travelId: travelId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Important
            'Content-Type': 'application/json'
          }
        }
      );
      alert("Réservation effectuée avec succès !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la réservation.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="creationDate" value={formData.creationDate} onChange={handleChange} required />
      <input type="number" name="seats" value={formData.seats} onChange={handleChange} required />
      <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="PENDING">PENDING</option>
        <option value="CONFIRMED">CONFIRMED</option>
        <option value="CANCELLED">CANCELLED</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
      <button type="submit">Réserver</button>
    </form>
  );
}

export default BookingForm;
