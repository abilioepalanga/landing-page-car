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
    let nextItem = activeItem.nextElementSibling;
    /*Numbers*/
    let number = document.querySelector(".indicators .number li.active");
    let nextNumber = number.nextElementSibling;

    if (nextItem != null) {
        activeItem.classList.remove("active");
        nextItem.classList.add("active");
    } else {
        nextItem = fisrtItem;
        activeItem.classList.remove("active");
        fisrtItem.classList.add("active");
    }
});
