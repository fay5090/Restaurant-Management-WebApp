//wait until page fully loads
document.addEventListener("DOMContentLoaded",function() {
//Find form and store in a variable
 const form = document.getElementById("reservationForm");
//When someone click submit button,run this function
 if(form){
 form.addEventListener("submit",function(e) {
//stops normal behaviour
e.preventDefault();
//get input values
const name = document.getElementById("name").ariaValueMax.trim();
const phone = document.getElementById("number").value.trim();
const email = document.getElementById("email").value.trim();
const date = document.getElementById("date").value.trim();
const time = document.getElementById("time").value;
const guests = document.getElementById("guests").value;


}
 }
