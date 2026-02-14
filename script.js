//wait until page fully loads

document.addEventListener("DOMContentLoaded",function() {

 const form = document.getElementById("reservationForm");

 if(form){
 form.addEventListener("submit",function(e) {
e.preventDefault();
}
 }
