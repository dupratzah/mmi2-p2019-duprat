import Rellax from "rellax";
console.log(Rellax);

let btn = document.getElementsByClassName('btn');
let btn2 = document.getElementsByClassName('btn2')
let quit = document.getElementsByClassName('quit');
let choose = document.getElementsByTagName('li');
const display = document.getElementsByClassName('content')[0];
const achat = document.getElementsByClassName('achat')[0];
init();

/*PARRALLAX*/
var rellax = new Rellax('.star', {
    center: true
});

for (let index = 0; index < btn.length; index++) {
    btn[index].onclick = e =>{
        affiche();
    } 
}
for (let index = 0; index < btn2.length; index++) {
    btn2[index].onclick = e =>{
        affiche2();
    } 
}
for (let index = 0; index < quit.length; index++){
    quit[index].onclick = e =>{     
        init();
    }
}


for (let index = 0; index < choose.length; index++) {
    choose[index].onclick = e =>{
        effBorder();
        setBorder(index);
    }
    
}
function affiche(){
    display.style.opacity = "0.98";
    display.style.display = "block";
}
function affiche2(){
    achat.style.opacity = "0.98";
    achat.style.display = "block";
}
function efface(){
    display.style.display = "none";
    display.style.opacity = "0";
}
function efface2(){
    achat.style.display = "none";
    achat.style.opacity = "0";
}
function setBorder($index){
    choose[$index].style.border = "6px solid yellow";
}
function effBorder(){
    for (let index = 0; index < choose.length; index++) {
        choose[index].style.border = "4px solid black";
    }
}
function init(){
    efface();
    efface2();
    effBorder();
}