const hamburger = document.querySelector("#burgerImg")
const dropDownMenu = document.querySelector("#mainNav")
const x = document.getElementsByTagName("BODY")[0];


hamburger.addEventListener('click', function (showMenu) {
    dropDownMenu.classList.toggle("menuOn");
})

const home = document.querySelector("#home-nav")
const redBg = document.querySelector("#red")
const orangeBg = document.querySelector("#orange")
const purpleBg = document.querySelector("#purple")
const greenBg = document.querySelector("#green")


home.addEventListener('click', function (greyBackground) {
    x.classList.remove("red-bg", "orange-bg", "purple-bg", "green-bg");
    x.classList.add("lightgrey-bg");
    dropDownMenu.classList.remove("menuOn");
})

redBg.addEventListener('click', function (redBackground) {
    x.classList.remove("lightgrey-bg", "orange-bg", "purple-bg", "green-bg");
    x.classList.add("red-bg");
    dropDownMenu.classList.remove("menuOn");
})

orangeBg.addEventListener('click', function (orangeBackground) {
    x.classList.remove("red-bg", "lightgrey-bg", "purple-bg", "green-bg");
    x.classList.add("orange-bg");
    dropDownMenu.classList.remove("menuOn");
})

purpleBg.addEventListener('click', function (purpleBackground) {
    x.classList.remove("red-bg", "orange-bg", "lightgrey-bg", "green-bg");
    x.classList.add("purple-bg");
    dropDownMenu.classList.remove("menuOn");
})

greenBg.addEventListener('click', function (greenBackground) {
    x.classList.remove("red-bg", "orange-bg", "purple-bg", "lightgrey-bg");
    x.classList.add("green-bg");
    dropDownMenu.classList.remove("menuOn");
})