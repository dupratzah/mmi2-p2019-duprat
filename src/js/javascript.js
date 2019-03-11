/*LOADING TIME FOR LINK*/
const btn = document.getElementById("btn");
var largeur = window.innerWidth;
console.log(largeur);
btn.onclick = e => {
    event.preventDefault();
    if (largeur < 1280) {
        setTimeout(() => {
        window.location = "./../main.html";
        }, 2000);
    }
    else{
        setTimeout(() => {
        window.location = "./../main.html";
        }, 1500);
    }
};
