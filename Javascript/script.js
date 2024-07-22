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

        number.setAttributeNode("value", ++i);
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
