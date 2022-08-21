/*
	Ejercicio de "Soy Dalto" cap 7

	Cofla desea comprar una computadora, sin embargo al ejecutar la pantalla completa del monitor, no puede ver los detalles de la pantalla, asi que debes crear un programa que los muestre 
*/

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = ` Protocol: <b>${protocol}</b></br>`;
html += ` hostname: <b>${hostname}</b></br>`;
html += ` Pathname: <b>${pathname}</b></br>`;
html += ` URL completa : <b>${href}</b></br>`;

document.write(html)