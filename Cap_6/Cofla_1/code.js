/* METODOS DE SELECCION */
const item1 = document.querySelector(".item1")
let p = document.createElement("P");

const parrafo = document.getElementById("id-parrafo")
document1 = `<p><br>document.getElementById = ${parrafo} <br><br></p>`
// trae <p id="id-parrafo"> esto es un parrafo </p> con la id
// por ello parrafo es un [objet HTML Paragraph Element]


const parrafo2 = document.getElementsByTagName("p")
document2 =`<p>document.getElementsByTagName = ${parrafo2} <br><br></p>`
// trae todos los etiquetas <p></p> con el nombre de la etiqueta
// por ello parrafo es un [object HTML Collection]
// en el caso que se tenga varios <p> toca acceder a cada uno con indices [num]

const parrafo3 = document.querySelector(".clase-parrafo")
document3 =`<p>document.querySelector = ${parrafo3} <br><br></p>`
// Devuelve el primer elemento del documento
// trae <p class="clase-parrafo"> esto es un parrafo </p> con la clase o id
// por ello parrafo es un [objet HTML Paragraph Element]
// obtener con clases escribir el ( . ) o con id , ecribir ( # )

const parrafo4 = document.querySelectorAll(".clase-parrafo")
document4 =`<p>document.querySelectorAll = ${parrafo4} <br><br></p>`
// Devuelve todos los elementos del documento
// por ello parrafo es un [object NodeList]
// en el caso que se tenga varios <p> toca acceder a cada uno con indices [num]

p.innerHTML = document1 + document2 + document3 + document4;
item1.appendChild(p);