var text = document.querySelector("#text");
var input = document.querySelector("#name");

input.addEventListener("keyup", () => {
    text.textContent = input.value;
});

input.addEventListener("keydown", () => {
    text.textContent = input.value;
});