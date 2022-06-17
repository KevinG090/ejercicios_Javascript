/*
	el insertAdjacentHTML inserta elementos al nodo en la posicion indicada

	'beforebegin': Antes que el propio elemento.
	'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
	'beforeend': Justo dentro del elemento, después de su último elemento hijo.
	'afterend': Después del propio elemento.
*/
// DIV 1
parrafo = document.querySelector(".p1") 
p = `<p>Con clases :  <b>${parrafo.className}</b><br>(parrafo.className)<br><br></p>`
parrafo.insertAdjacentHTML(`afterend`,p)

// DIV 2
div = document.querySelector(".div2")
parrafo = document.querySelector(".p2")

p = `<p>Con clases :  <b>${parrafo.className}</b><br>(parrafo.className)<br></p>`
p += `<p><br><b style='color:red'>Se agrega una clase con : <br>(parrafo.classList.add("nueva-clase"))</b><br></p>`
parrafo.insertAdjacentHTML(`afterend`,p)

parrafo.classList.add("nueva-clase") // agregamos nueva clase

p = `<p>Con Nuevas clases :  <b>${parrafo.className}</b><br><br></p>`
div.insertAdjacentHTML(`beforeend`,p)

parrafo.classList.remove("nueva-clase")// elmininamos la clase

p = `<p><b style='color:red'>Se elimina una clase con : <br>(parrafo.classList.remove("nueva-clase"))</b><br></p>`
p += `<p>Se elimino una clase y quedan :  <b>${parrafo.className}</b><br></p>`
div.insertAdjacentHTML(`beforeend`,p)

p = `<p><br><b>Tambien podemos acceder (similar al get...) a las clases por items</b><br><b style='color:red'>( parrafo.classList.item(0) ) </b><br></p>`
p += `<p>clase en la ubicacion ( 0 ) es : <b>${parrafo.classList.item(0)}</b><br></p>`
p += `<p>clase en la ubicacion ( 1 ) es : <b>${parrafo.classList.item(1)}</b><br></p>`
p += `<p>clase en la ubicacion ( 2 ) es : <b>${parrafo.classList.item(2)}</b><br><b style='color:red'>retorna null porque no tiene mas clases </b><br></p>`
div.insertAdjacentHTML(`beforeend`,p)

p = `<p><br><b>Tambien podemos validar si una clase esta o no <br>
y de acuerdo con ello añadirla o no</b><br>
si la la clase X esta, entonces eliminala<br>
pero si la clase X no esta, entonces agregala<br>
<b style='color:red'>( parrafo.classList.toggle("nueva-clase") ) </b><br></p>`
parrafo.classList.toggle("nueva-clase");
p += `<p>Se agrega una nueva clase :  <b>${parrafo.className}</b><br></p>`
div.insertAdjacentHTML(`beforeend`,p)

parrafo.classList.toggle("nueva-clase");
p = `<b style='color:red'>( parrafo.classList.toggle("nueva-clase") ) </b><br></p>`
p += `<p>Se elimina clase :  <b>${parrafo.className}</b><br><br></p>`
div.insertAdjacentHTML(`beforeend`,p)

// si le agregamos (true) la clase nombrada solamente va a ser añadida
// sin embargo el caso contrario (false), la clase siempre sera eliminada
// ej: parrafo.classList.toggle("nueva-clase",true);

