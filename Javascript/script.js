let prevButton = document.getElementById("previus");
let nextButton = document.getElementById("next");
let conteiner = document.querySelector(".conteiner");
let items = document.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = document.querySelectorAll(".indicators li");
let number = document.querySelector(".indicators .number");

let list = document.querySelector("section .list");

let control = document.querySelectorAll(".indicators .number");
let i = 1;
let fisrtItem = items[0];
let fisrtNumber = dots[0];

nextButton.addEventListener("click", function () {
    if (list.style.getPropertyValue("--calculation") < 0) {
        list.style.setProperty("--calculation", -1);
        console.log(list.style.getPropertyValue("--calculation"));
    } else {
        list.style.setProperty("--calculation", 1);
        console.log(list.style.getPropertyValue("--calculation"));
    }

    let activeItem;
    activeItem = document.querySelector(".list .item.active");
    let nextItem = activeItem.nextElementSibling;

    i <= items.length ? i : (i = 0);
    /*Numbers*/
    let activeNumber = document.querySelector(".indicators li.active2");
    let nextNumber = activeNumber.nextElementSibling;

    if (nextItem != null && nextNumber != null) {
        activeItem.classList.remove("active");
        nextItem.classList.add("active");

        activeNumber.classList.remove("active2");
        nextNumber.classList.add("active2");

        number.innerText = "0" + ++i;
    } else {
        nextItem = fisrtItem;
        activeItem.classList.remove("active");
        fisrtItem.classList.add("active");

        nextNumber = fisrtNumber;
        activeNumber.classList.remove("active2");
        fisrtNumber.classList.add("active2");
        i = 1;
        number.innerText = "0" + i;
    }
});

prevButton.addEventListener("click", function () {
    if (list.style.getPropertyValue("--calculation") < 0) {
        list.style.setProperty("--calculation", 1);
    } else {
        list.style.setProperty("--calculation", -1);
    }

    let activeItem = document.querySelector(".list .item.active");
    let prevItem = activeItem.previousElementSibling;

    /*Numbers*/
    let activeNumber = document.querySelector(".indicators li.active2");
    let prevNumber = activeNumber.previousElementSibling;

    i < 1 ? (i = items.length) : i;

    if (prevItem != null && prevNumber != null) {
        activeItem.classList.remove("active");
        prevItem.classList.add("active");

        activeNumber.classList.remove("active2");
        prevNumber.classList.add("active2");

        number.innerText = "0" + --i;
    } else {
        prevItem = items[items.length - 1];
        activeItem.classList.remove("active");
        prevItem.classList.add("active");

        prevNumber = dots[dots.length - 1];
        activeNumber.classList.remove("active2");
        prevNumber.classList.add("active2");

        i = items.length;
        number.innerText = "0" + i;
    }
});
