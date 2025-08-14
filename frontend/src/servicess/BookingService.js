const API_URL = "http://localhost:8084/api/bookings";

export async function getBookings() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch bookings");
  return response.json();
}

export async function createBooking(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create booking");
  return response.json();
}

export async function deleteBooking(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete booking");
}
