var namee = document.querySelector("#name");
var surname = document.querySelector("#surname");
var city = document.querySelector("#city");
var resetButton = document.querySelector("button");

resetButton.addEventListener("click", () => {
    if(confirm("Are You Sure About Resetting All Fields?")){
        namee.value = "";
        surname.value = "";
        city.value = "";
    }
})