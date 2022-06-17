// const item1 = document.querySelector(".item1");

// DIV 1
const parrafo = document.querySelector(".parrafo");

let valor = `<br><p><b>parrafo.textContent</b> = ${parrafo.textContent}</p>`;
valor += `<p style='color:red'>textContent muestra <b>TODO</b> el texto de un elemento<br><br></p>`

valor += `<p><b>YA NO SE USA ( innerText )</b></p>`
valor += `<p><b>parrafo.innerText</b> = ${parrafo.innerText}</p>`;
valor += `<p style='color:red'>innerText muestra el texto <b>VISIBLE</b> de un elemento<br><br></p>`

valor += `<p><b>parrafo.innerHTML</b> = ${parrafo.innerHTML}</p>`
valor += `<p style='color:red'>innerHTML muestra el texto <b>CON ESTILOS</b> en el documento<br></p>`
valor += `<p style='color:red'>Tambien el innerHTML muestra el <b>HTML DEL ELEMENTO</b> <br>Nota: Mirar Consola<br><br></p>`
console.log(`parrafo.innerHTML : `)
console.log(parrafo.innerHTML)
console.log("")

valor += `<p><b>parrafo.outerHTML</b> = ${parrafo.outerHTML}</p>`
valor += `<p style='color:red'>outerHTML muestra el texto <b>CON ESTILOS</b> en el documento<br></p>`
valor += `<p style='color:red'>Tambien el outerHTML muestra el <b>HTML NODO</b> <br>Nota: Mirar Consola<br><br></p>`
console.log(`parrafo.outerHTML : `)
console.log(parrafo.outerHTML)
console.log("")

parrafo.insertAdjacentHTML("afterend",valor)

// DIV 2

const item2 = document.querySelector(".item2");

const parrafo2 = document.createElement("P");// se crea un elemento P
parrafo2.classList.add("clase-parrafo2");// se adiciona la clase (clase-parrafo2)
parrafo2.innerHTML = "Esto es un parrafo"; // se adiciona un texto al elemento P que se llama (parrafo2)
item2.appendChild(parrafo2);// el nuevo elemento (parrafo2) se agrega como hijo al div con clase (item2)

valor = `<p><b>( createElement )</b><br><br></p>`;
parrafo2.insertAdjacentHTML("afterend",valor);// se agrega el elemento (valor) despues del elemento (parrafo2)

// ----------

const lista = document.createElement("UL");
lista.classList.add("lista")
let fragment = document.createDocumentFragment();

for ( i = 0 ; i <=2 ; i++ ){
	let itemList = document.createElement("LI");
	itemList.innerHTML = `elemento ${i+1}`;
	fragment.appendChild(itemList);
}
lista.appendChild(fragment)
item2.appendChild(lista)
// .createDocumentFragment se crea un objeto vacio la cual se usa para agregar elementos
//  y al finalizar, el DocumentFragment se agrega al arbol principal del DOM de esta manera 
// consume recursos 



valor = `<p><br><b>lista.childNodes </b> <br><b style='color:red'>Nota: Mirar Consola</b></p>`
valor += `<p style='color:red'>muestra todos los hijos <b>INCLUYENDO ESPACIOS</b> de un nodo/elemento padre<br></p>`
lista.insertAdjacentHTML(`afterend`,valor)
console.log(`lista.childNodes :`)
console.log(lista.childNodes)
console.log("")

valor = `<p><br><b>lista.children </b> <br><b style='color:red'>Nota: Mirar Consola</b></p>`
valor += `<p style='color:red'>muestra todos los <b>ELEMENTOS HIJOS</b> de un nodo/elemento padre<br></p>`
lista.insertAdjacentHTML(`afterend`,valor)
console.log(`lista.children :`)
console.log(lista.children)
console.log("")

valor = `<p><br><b>lista.firstChild y lista.lastChild </b> <br><b style='color:red'>Nota: Mirar Consola</b></p>`
valor += `<p style='color:red'>muestran el <b>PRIMER Y ULTIMO ELEMENTO</b> de un nodo/elemento padre<br></p>`
lista.insertAdjacentHTML(`afterend`,valor)
console.log(`lista.firstChild :`)
console.log(lista.firstChild)
console.log("")

console.log(`lista.lastChild :`)
console.log(lista.lastChild)
console.log("")
// (firstChild y lista.lastChild) puede contar los espacios entre los elementos la cual varia el item/ubicacion de cada uno
// por ello se recomienda (firstElementChild y lastElementChild) que toma los elementos directamente
valor = `<p><b>( createElement y createDocumentFragment con un for )</b><br></p>`;
lista.insertAdjacentHTML("afterend",valor);// se agrega el elemento (valor) despues del elemento (parrafo2)


// DIV 3
const item3 = document.querySelector(".item3")
const parrafo_antiguo = document.querySelector(".texto");

const parrafo_nuevo = document.createElement("P");
parrafo_nuevo.innerHTML="Este es un nuevo parrafo";
item3.replaceChild(parrafo_nuevo,parrafo_antiguo);

valor = `<p>se remplazo el elemento por otro con :<br> <b style='color:red'>replaceChild</b><b> ( elementoNuevo , elementoAntiguo )</b><br></p>`;
item3.insertAdjacentHTML("beforeend",valor);//

valor = `<p>se puede eliminar un elemento hijo con :<br> <b style='color:red'>removeChild</b><b> ( elementoAEliminar )</b><br><br></p>`;
item3.insertAdjacentHTML("beforeend",valor);//

// ----------

const h2 = document.createElement("H2");
h2.innerHTML = "Propiedades Padres";
item3.appendChild(h2)

valor = `<p>Saber el padre de un elemento :<br> <b style='color:red'>parentElement o parentNode</b><br></p>`;
valor += `<p><b style='color:red'>Nota: Mirar Consola</b><br></p>`;
console.log("h2.parentElement :")
console.log(h2.parentElement);
console.log("")
item3.insertAdjacentHTML("beforeend",valor);//

// DIV 4

const item4 = document.querySelector(".item4")
const texto2 = document.querySelector(".texto2")// elemento "hermano"

console.log(`texto2.nextElementSibling :`)
console.log(texto2.nextElementSibling)// el siguiente elemento del texto2 la cual es un hermano
console.log(`texto2.previousElementSibling :`)
console.log(texto2.previousElementSibling)// el anterior elemento del texto2 la cual es un hermano
console.log("")

valor = `<p><br><b>nextElementSibling y previousElementSibling </b> <br></p>`
valor += `<p style='color:red'>muestran el <b>SIGUIENTE Y ANTERIOR ELEMENTO ( HERMANO )</b><br>Nota: Mirar Consola<br></p>`
item4.insertAdjacentHTML('beforeend',valor)
