/*LOADING TIME FOR LINK*/
const btn = document.getElementById("btn");
btn.onclick = e => {
    event.preventDefault();
    setTimeout(() => {
        
        window.location = "./../main.html";

    }, 2000);
};
