//wait until page fully loads
document.addEventListener("DOMContentLoaded",function() {
//Find form and store in a variable
 const form = document.getElementById("reservationForm");
//When someone click submit button,run this function
 if(form){
 form.addEventListener("submit",function(e) {
//stops js normal behaviour
e.preventDefault();
//get input values
const name = document.getElementById("name").value.trim();
const phone = document.getElementById("number").value.trim();
const email = document.getElementById("email").value.trim();
const date = document.getElementById("date").value.trim();
const time = document.getElementById("time").value;
const guests = dparseInt.getElementById("guests").value;

//if something is empty show error
if(!name||!phone||!email||!date||!time||!guests){
alert("Please fill in all required fields!");
  return;
}

if (guests < 1 || guests > 20) {
alert("Guests must be between 1 and 20.");
 return;
 }

// Create reservation object
      const reservation = {
        name,
        phone,
        email,
        date,
        time,
        guests
    };

//save this data in the browser permanently
// Get existing reservations
      let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

      // Add new one
      reservations.push(reservation);

      // Save back to localStorage
      localStorage.setItem("reservations", JSON.stringify(reservations));

      alert("Reservation saved successfully! 🎉");

      form.reset();
    });

  }

});

const reservationList = document.getElementById("reservationList");

if (reservationList) {

  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  reservations.forEach(res => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${res.name}</strong> - ${res.date} at ${res.time} (${res.guests} guests)</p>
    `;
    reservationList.appendChild(div);
   } );
}


