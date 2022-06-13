/* METODOS DE SELECCION */

const item1 = document.querySelector(".item1")
let p = "";

const parrafo = document.getElementById("id-parrafo")
p += `<p><br>document.getElementById = ${parrafo} <br><br></p>`
// trae <p id="id-parrafo"> esto es un parrafo </p> con la id
// por ello parrafo es un [objet HTML Paragraph Element]

const parrafo2 = document.getElementsByTagName("p")
p +=`<p>document.getElementsByTagName = ${parrafo2} <br><br></p>`
// trae todos los etiquetas <p></p> con el nombre de la etiqueta
// por ello parrafo es un [object HTML Collection]
// en el caso que se tenga varios <p> toca acceder a cada uno con indices [num]

const parrafo3 = document.querySelector(".clase-parrafo")
p +=`<p>document.querySelector = ${parrafo3} <br><br></p>`
// Devuelve el primer elemento del documento
// trae <p class="clase-parrafo"> esto es un parrafo </p> con la clase o id
// por ello parrafo es un [objet HTML Paragraph Element]
// obtener con clases escribir el ( . ) o con id , ecribir ( # )

const parrafo4 = document.querySelectorAll(".clase-parrafo")
p +=`<p>document.querySelectorAll = ${parrafo4} <br><br></p>`
// Devuelve todos los elementos del documento
// por ello parrafo es un [object NodeList]
// en el caso que se tenga varios <p> toca acceder a cada uno con indices [num]

item1.insertAdjacentHTML('beforeend',p)

/*
	el insertAdjacentHTML inserta elementos al nodo en la posicion indicada

	'beforebegin': Antes que el propio elemento.
	'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
	'beforeend': Justo dentro del elemento, después de su último elemento hijo.
	'afterend': Después del propio elemento.
*/

/* METODOS PARA DEFINIR, OBTENER, ELIMINAR ATRIBUTOS */

// div 1

const input = document.querySelector(".clase-input1");
typeGET = input.getAttribute("type") ;
p1 = `<p>input.getAttribute("type") = ${typeGET} <br></p>`
input.insertAdjacentHTML('afterend',p1)
// a getAttribute se le indica el dato que queremos obtener (valor de x atributo, en este caso el valor de type)

// div 2 

const input2 = document.querySelector(".clase-input2");
typeSET = input2.setAttribute("type","color") ;
p1 = `<p>input.setAttribute("type","color")<br><b style='color:red'>Nota: El input era Range pero con el setAttribute se cambio a Color</b><br><br></p>`;
input2.insertAdjacentHTML('afterend',p1);
// a setAttribute se le indica el tipo dato que queremos cambiar y el valor cambiado (1ro el tipo, 2do el nuevo valor del tipo)

// div 3 

const input3 = document.querySelector(".clase-input3");
typeGET = input3.getAttribute("type");
p1 = `<p>tipo de dato del 2do input <b>${typeGET}</b><br></p>`;

typeREMOVE = input3.removeAttribute("type");
p1 += `<p><b style='color:red'>input3.removeAttribute("type")</b></p>`;

typeGET = input3.getAttribute("type");
p1 += `<p>el tipo de dato es <b>${typeGET}</b> porque se elimina<br></p>`;

input3.insertAdjacentHTML('afterend',p1);
// a removeAttribute se le indica el dato que queremos eliminar (eliminar el type)



