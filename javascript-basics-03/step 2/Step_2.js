var a1 = document.querySelector("#show");
var a2 = document.querySelector("#hide");
var text = document.querySelector("#texte");

function run() {
    a1.addEventListener("click", () => {
        text.style.display = "block";
    })

    a2.addEventListener("click", () => {
        text.style.display = "none";
    })
}

run();