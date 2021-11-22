"use strict";

/////////// CUSTOM CURSOR ///////////

const cursorEl = document.querySelector(".inner");
const cursorEl2 = document.querySelector(".outer");
document.addEventListener("mousemove", function (e) {
  cursorEl.style.top = e.clientY + "px";
  cursorEl.style.left = e.clientX + "px";

  cursorEl2.style.top = e.clientY + "px";
  cursorEl2.style.left = e.clientX + "px";
});

/////////// GREETINGS ///////////

let myDate = new Date();
let hrs = myDate.getHours();

let greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.querySelector("#greeting").innerHTML = greet;

/////////// PAGE INDICATOR ///////////
