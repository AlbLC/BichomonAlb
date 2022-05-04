console.log(document.title);

//1

//var etiqueta = document.createElement("h2");
//var cont = document.createTextNode("Generasión 1 Pokimon");
//etiqueta.appendChild(cont);
//document.body.appendChild(etiqueta);

//var eliminar = document.getElementById("gen-1");
//eliminar.removeChild(document.getElementById("gen-1").lastChild);
//document.getElementById("gen-1").appendChild(etiqueta);
document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon"
//2

document.querySelector(".infocard-list").style.backgroundColor = "red"

//3
var urlImp = document.location.href;
console.log(urlImp);

//4
var urlDomain = document.domain;
console.log(urlDomain);

//5
var imag = document.querySelectorAll("img");
console.log(imag.length);

//6

let nicolas = document.querySelectorAll("img");


for (let i = 0; i < nicolas.length; i++) {
  nicolas[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}


