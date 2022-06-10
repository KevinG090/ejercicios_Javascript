/*
	Cofla se quedo encerrado en su casa porque se le rompio la llave asi que necesitamos crear un sistema que muestre
	a cofla las llaves posivles con sus 4 imagenes y cofla debe seleccionar cual llave elegir, una vez que cofla selecciono
	la llave, envia los datos para que el programador se encargue de todo

*/

const contenedor = document.querySelector(".container")

const crearLLave = (nombre,modelo,precio) =>{
	img = "<img class='llave-img' src='llave.png'>";
	nombre = `<h2><b>Nombre : </b>${nombre}</h2>`;
	modelo = `<h3><b>Modelo : </b>${modelo}</h3>`;
	precio = `<p><b>Precio : </b><b style='color:red'>${precio} USD </b></p>`;
	return [img,nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();


for (i = 0; i < 20 ; i++){
	let modelo = Math.round(Math.random()*100);
	let precio = Math.round(Math.random()*30);

	let llave_1 = crearLLave(`llave ${i+1}`,modelo,precio);
	
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{
		document.querySelector(".Key-data").value=modelo;
	})
	div.tabIndex= i; //que quede seleccionado
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML = llave_1[0] + llave_1[1] + llave_1[2] + llave_1[3];

	documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment)
