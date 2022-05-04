console.log(document.title);

//1


var etiqueta = document.createElement("h2");
var cont = document.createTextNode("Generasión 1 Pokimon");
etiqueta.appendChild(cont);
document.body.appendChild(etiqueta);

var eliminar = document.getElementById("gen-1");
eliminar.removeChild(document.getElementById("gen-1").lastChild)
document.getElementById("gen-1").appendChild(etiqueta);

//2
var genColor = document.querySelector(".infocard-list");
genColor.style.background = "red";
console.log(genColor)

//3
var urlImp = document.location.href
console.log(urlImp)

//4
var urlDomain = document.domain
console.log(urlDomain)

//5
var imag = document.querySelectorAll("img-fixed")
console.log(imag.length)

//6

let nico = document.querySelectorAll('img');

for (let i = 0; i < nico.length; i++) {
    nico[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
};