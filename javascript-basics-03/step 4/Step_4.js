var password1 = document.querySelector("#password");
var password2 = document.querySelector("#confirmation");
var btn = document.querySelector("button");

btn.addEventListener("click", () => {
        if(password2 !== password1){
            password2.style.border = "2px solid red";
        } else {
            password2.style.border = "none";
        }
})