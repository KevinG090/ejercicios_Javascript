let free_2_am = false;
var cost = 2000;

const verificacionEntrada = (nombre,hora)=>{

	alert(`bienvenido ${nombre} , son las ${hora}:00`)

	let edad = prompt(`cual es tu edad? `);
	edad = parseInt(edad);

	if (edad >= 18){
		if (hora >= 2 && hora < 6 && free_2_am == false){
			alert(`Puedes pasar ${nombre} y la entrada sera gratis `);
			free_2_am = true;
		}
		else if (hora >= 2 && hora < 6 && free_2_am == true){
			alert(`Puedes pasar ${nombre}, pero la entrada sera a ${cost} pesos`);
		}
		else {
			alert(`Aun NO puedes pasar ${nombre}`);
		}
	}
	else {
		alert(`lo siento ${nombre}, no puedes pasar `);
	}

}


verificacionEntrada("kevin",1);
verificacionEntrada("david",2);
verificacionEntrada("guevara",3);
verificacionEntrada("manosalva",6);