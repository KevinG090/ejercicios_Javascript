let nombres1 = ["Kevin","jorge","Maria"];
	document.write(`<code> <b>
		let nombres1 = [${nombres1}]; </b><br>
		</code>`);
	// se saca el ultimo valor de un array ubicandolo en una nueva variable 
	pop = nombres1.pop(); 
	
	document.write("<b>pop : " + pop + "</b><b style='color:red'> (Ultimo Elemento Eliminado)</b><br>");
	document.write(`<code> <b>
		let nombres1 = [${nombres1}]; </b> <br><br>
		</code>`);

let nombres2 = ["Kevin","jorge","Maria"];
	document.write(`<code> <b>
		let nombres2 = [${nombres2}]; </b><br>
		</code>`);
	// Agrega (x) valores al array devolviendonos la cantidad de elementos en el array y modificando el mismo
	push = nombres2.push("David","Pedro");

	document.write("<b>push  : " + push + "</b><b style='color:red'> Cantidad de Elementos (Agrego 2 mas al final)</b><br>");
	document.write(`<code> <b>
		let nombres2 = [${nombres2}]; </b> <br><br>
		</code>`);

let nombres3 = ["Kevin","jorge","Maria"];
	document.write(`<code> <b>
		let nombres3 = [${nombres3}]; </b><br>
		</code>`);
	// se saca el primer valor de un array ubicandolo en una nueva variable 
	shift = nombres3.shift(); 
	document.write("<b>shift  : " + shift + "</b><b style='color:red'> (Primer Elemento Eliminado)</b><br>");
	document.write(`<code> <b>
		let nombres3 = [${nombres3}]; </b> <br><br>
		</code>`);

let nombres4 = ["Kevin","jorge","Maria"];
	document.write(`<code> <b>
		let nombres4 = [${nombres4}]; </b><br>
		</code>`);
	// se saca el primer valor de un array ubicandolo en una nueva variable 
	unshift = nombres4.unshift("Pepito"); 
	document.write("<b>unshift  : " + unshift + "</b><b style='color:red'> Cantidad de Elementos (Agrego 1 mas al inicio)</b><br>");
	document.write(`<code> <b>
		let nombres4 = [${nombres4}]; </b> <br><br>
		</code>`);

let numeros = [1,2,3,4,5];
	document.write(`<code> <b>
		let numeros = [${numeros}]; </b><br>
		</code>`);
	// Invierte los valores de un array
	reverse = numeros.reverse(); 
	document.write("<b>reverse  : " + reverse + "</b><b style='color:red'> (Invierte El Array)</b><br>");
	document.write(`<code> <b>
		let numeros = [${numeros}]; </b> <br><br>
		</code>`);

let letras = ["a","d","g","a","z","m"];
	document.write(`<code> <b>
		let letras = [${letras}]; </b><br>
		</code>`);
	// Ordena los valores de un array
	sort = letras.sort(); 
	document.write("<b>sort  : " + sort + "</b><b style='color:red'> (Ordena El Array)</b><br>");
	document.write(`<code> <b>
		let letras = [${letras}]; </b> <br><br>
		</code>`);

let letras2 = ["a","b","d","e","f","g"];
	document.write(`<code> <b>
		let letras2 = [${letras2}]; </b><br>
		</code>`);
	// 1er dato = ubicacion de inicio 
	// 2do dato = cantidad de elementos a eliminar
	// 3cer o mas =  elementos agregar
	
	splice = letras2.splice(0,0,"f","ñ"); 
	document.write("<b>splice  : " + splice + "</b><b style='color:red'> No se elimina nd, y se agrega 2 elementos en la posicion (0) </b><br>");
	document.write(`<code> <b>
		let letras2 = [${letras2}]; </b> <br>
		</code>`);
	
	splice = letras2.splice(1,0,"k","q"); 
	document.write("<b>splice  : " + splice + "</b><b style='color:red'> No se elimina nd, y se agrega 2 elementos en la posicion (1) </b><br>");
	document.write(`<code> <b>
		let letras2 = [${letras2}]; </b> <br>
		</code>`);
	
	splice = letras2.splice(0,5); 
	document.write("<b>splice  : " + splice + "</b><b style='color:red'> Se eliminan (5) elementos apartir de la posicion (0) </b><br>");
	document.write(`<code> <b>
		let letras2 = [${letras2}]; </b> <br>
		</code>`);