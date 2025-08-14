const API_URL = "http://localhost:8080/api/bookings";

export async function getBookings() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createBooking(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteBooking(id) {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
