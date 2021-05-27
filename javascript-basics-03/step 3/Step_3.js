var text = document.querySelector("#text");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");

green.addEventListener("click", () => {
    text.style.color = "green";
});

red.addEventListener("click", () => {
    text.style.color = "red";
});

blue.addEventListener("click", () => {
    text.style.color = "blue";
});


