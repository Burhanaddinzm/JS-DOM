"use strict";
const buttonIncEl = document.querySelector(".increase");
const buttonDecEl = document.querySelector(".decrease");
const counterEl = document.querySelector(".counter");

let counter = 0;

buttonIncEl.addEventListener("click", () => {
  counterEl.textContent = ++counter;
  if (counter > 0) {
    counterEl.style.color = "green";
  } else if (counter == 0) {
    counterEl.style.color = "white";
  }
});

buttonDecEl.addEventListener("click", () => {
  counterEl.textContent = --counter;
  if (counter < 0) {
    counterEl.style.color = "red";
  } else if (counter == 0) {
    counterEl.style.color = "white";
  }
});
