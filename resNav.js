function resNavBar(){
document.querySelector('.fi-br-menu-burger').style.display="none";
document.querySelector('.fi-br-cross').style.display="block";
document.getElementById('topNav').style.display="block";

}

function closeNavBar(){
  document.querySelector('.fi-br-menu-burger').style.display="block";
   document.querySelector('.fi-br-cross').style.display="none";
   document.getElementById('topNav').style.display="none";
}

// button location
bookAppointment=()=>{
   window.location="./bookAppointments.html";
}  
servicePage=()=>{
    window.location="./services.html";
}