let prevButton = document.getElementById("previus");
let nextButton = document.getElementById("next");
let conteiner = document.querySelector(".conteiner");
let items = document.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = document.querySelectorAll(".indicators li");
let number = document.querySelector(".indicators .number");

let i = 1;
let fisrtItem = items[0];
let fisrtNumber = dots[0];
prevButton.addEventListener("click", function () {
    let activeItem = document.querySelector(".list .item.active");
    let nextItem = activeItem.nextElementSibling;

    /*Numbers*/
    let activeNumber = document.querySelector(".indicators li.active2");
    let nextNumber = activeNumber.nextElementSibling;

    if (nextItem != null && nextNumber != null) {
        activeItem.classList.remove("active");
        nextItem.classList.add("active");

        activeNumber.classList.remove("active2");
        nextNumber.classList.add("active2");

        number.innerText = ++i;
    } else {
        nextItem = fisrtItem;
        activeItem.classList.remove("active");
        fisrtItem.classList.add("active");

        nextNumber = fisrtNumber;
        activeNumber.classList.remove("active2");
        fisrtNumber.classList.add("active2");

        number.setAttribute = 1;
    }
});

nextButton.addEventListener("click", function () {
    let activeItem = document.querySelector(".list .item.active");
    let prevItem = activeItem.previousElementSibling;

    /*Numbers*/
    let activeNumber = document.querySelector(".indicators li.active2");
    let prevNumber = activeNumber.previousElementSibling;

    if (prevItem != null && prevNumber != null) {
        activeItem.classList.remove("active");
        prevItem.classList.add("active");

        activeNumber.classList.remove("active2");
        prevNumber.classList.add("active2");

        number.setAttributeNode("value", --i);
    } else {
        prevItem = items[items.length - 1];
        activeItem.classList.remove("active");
        prevItem.classList.add("active");

        prevNumber = dots[dots.length - 1];
        activeNumber.classList.remove("active2");
        prevNumber.classList.add("active2");

        number.setAttribute = items.length;
    }
});
