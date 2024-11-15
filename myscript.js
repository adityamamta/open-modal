"use strict"

const btnToggle = document.querySelectorAll(".modal-toggle");
const modalContainer = document.querySelector(".modal-container");

btnToggle.forEach((btn) => {
    btn.addEventListener("click", () => {
        modalContainer.classList.toggle("hidden");
    })
});
