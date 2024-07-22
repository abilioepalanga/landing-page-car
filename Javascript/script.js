let prevButton = document.getElementById("previus");
let nextButton = document.getElementById("next");
let conteiner = document.querySelector(".conteiner");
let items = document.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = document.querySelectorAll(".indicators li");

let active = 0;
let fisrtItem = items[0];
let fisrtNumber = dots[0];
prevButton.addEventListener("click", function () {
    let activeItem = document.querySelector(".list .item.active");
    let nextItem = activeItem.nextElementSibling;

    /*Numbers*/
    let activeNumber = document.querySelector(".indicators li.active2");
    console.log("Active" + activeNumber.innerHTML);
    /*let nextNumber = activeNumber.nextElementSibling;
    console.log("NExt" + nextNumber);

    if (nextItem != null) {
        activeItem.classList.remove("active");
        nextItem.classList.add("active");

        activeNumber.classList.remove("active2");
        nextNumber.classList.add("active2");
    } else {
        nextItem = fisrtItem;
        activeItem.classList.remove("active");
        fisrtItem.classList.add("active");
    }
    */
});
