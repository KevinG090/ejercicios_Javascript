
document.write(`<b> <h2> ARRAY CON 3 ELEMENTOS</h2></b>`)
document.write(`
	<code> 
	<h3>let animales = ["gato" , "perro" , "leon"]; </h3>
	</code>
`)

let animales = ["gato" , "perro" , "leon"];

document.write(`
	------------------
	<code>
	<h3>for (animal in animales){ <br>
	document.write("animal = <b> ", + animal </b>);
	} </h3>

	</code>
`)

for (animal in animales){
	document.write(`animal = <b> ${animal} </b> `);
}

document.write(`<br><br>`)
document.write(`
	------------------
	<code>
	<h3>for (animal in animales){ <br>
	document.write("animales = <b> ", + animales </b>);
	} </h3>

	</code>
`)

for (animal in animales){
	document.write(`animal = <b> ${animales} </b> `);
}

document.write(`<br><br>`)
document.write(`
	------------------
	<code>
	<h3>for (animal in animales){ <br>
	document.write(" animales[animal] = <b> ", + animales[animal] </b>);
	} </h3>

	</code>
`)
for (animal in animales){
	document.write(`animales[animal] = <b> ${animales[animal]} </b> `);
}
document.write(`
	<br><br>
	------------------------------------
	<br><br><br>
`)
document.write(`<b> <h2> DICCIONARIO CON 3 ELEMENTOS Y SUS DEFINICIONES</h2></b>`)

document.write(`
	<code> 
	<h3>let objetos = {mesa:"table" , pelota:"ball" , libro:"book"}; </h3>
	</code>
`)

let objetos = {mesa:"table" , pelota:"ball" , libro:"book"};

document.write(`
	------------------
	<code>
	<h3>for (objeto in Objetos){ <br>
	document.write("(Objetos) = <b> "+ (Objetos) </b>"");
	} </h3>

	</code>
`)

for (objeto in objetos){
	document.write(`(objetos) = <b> ${(objetos)} </b>  `)
}

document.write(`<br><br>`)
document.write(`
	------------------
	<code>
	<h3>for (objeto in Objetos){ <br>
	document.write("(objeto) = <b> "+ (objeto) </b>"");
	} </h3>

	</code>
`)

for (objeto in objetos){
	document.write(`{objeto} = <b> ${objeto} </b>  `)
}

document.write(`<br><br>`)
document.write(`
	------------------
	<code>
	<h3>for (objeto in Objetos){ <br>
	document.write("(objetos{objeto})= <b> "+ (objetos{objeto}) </b>"");
	} </h3>

	</code>
`)

for (objeto in objetos){
	document.write(`(objetos{objeto}) = <b> ${(objetos[objeto])} </b>  `)
}

document.write(`<br><br><br><br>`)




