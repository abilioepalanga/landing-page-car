let prevButton = document.getElementById("previus");
let nextButton = document.getElementById("next");
let conteiner = document.querySelector(".conteiner");
let items = document.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = document.querySelectorAll(".indicators li");

let active = 0;
let fisrtItem = items[0];
let lastItem = items.length - 1;
prevButton.addEventListener("click", function () {
    let activeItem = document.querySelector(".list .item.active");
    let activeDot = document.querySelector(".indicators li.active");
    let prevItem = activeItem.previousElementSibling;
    let prevDot = activeDot.previousElementSibling;

    if (prevItem) {
        activeItem.classList.remove("active");
        prevItem.classList.add("active");

        activeDot.classList.remove("active");
        prevDot.classList.add("active");
    }
});
