let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function hone() {
  homeEl.textContent = parseInt(homeEl.textContent) + 1;
}
function htwo() {
  homeEl.textContent = parseInt(homeEl.textContent) + 2;
}
function hthree() {
  homeEl.textContent = parseInt(homeEl.textContent) + 3;
}

function gone() {
  guestEl.textContent = parseInt(guestEl.textContent) + 1;
}
function gtwo() {
  guestEl.textContent = parseInt(guestEl.textContent) + 2;
}
function gthree() {
  guestEl.textContent = parseInt(guestEl.textContent) + 3;
}
function reset(){
  homeEl.textContent=0
  guestEl.textContent=0
}