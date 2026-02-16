//Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

  // Grab the form
  const form = document.getElementById("reservationForm");

// Only run if form exists
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop page refresh

// Get values from inputs
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("number").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value.trim();
      const time = document.getElementById("time").value;
      const guests = parseInt(document.getElementById("guests").value);

// Check for empty fields
      if (!name || !phone || !email || !date || !time || !guests) {
        alert("Please fill in all required fields!");
        return;
      }

// Check guests limit
      if (guests < 1 || guests > 20) {
        alert("Guests must be between 1 and 20.");
        return;
      }

// Create reservation object
      const reservation = { name, phone, email, date, time, guests };

// Get existing reservations from localStorage or empty array
      let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

      // Add new reservation
      reservations.push(reservation);

      // Save back to localStorage
      localStorage.setItem("reservations", JSON.stringify(reservations));

      alert("Reservation saved successfully! 🎉");

      // Clear the form
      form.reset();
    });
  }

  // Show reservations on homepage
  const homeList = document.getElementById("homeReservationList");
  if (homeList) {
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    if (reservations.length === 0) {
      homeList.innerHTML = "<li>No upcoming reservations</li>";
    } else {
      reservations.forEach(function (reservation) {
        const li = document.createElement("li");
        li.textContent = `${reservation.name} - ${reservation.date} at ${reservation.time} (${reservation.guests} guests)`;
        homeList.appendChild(li);
      });
    }
  }

});