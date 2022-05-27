
class Animal {
	constructor(especie,edad,color){ // el objeto tiene esos parametros 
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInfo (){
		document.write (this.info + "<br>");
	}
}
class Perros extends Animal {
	constructor(especie,edad,color,raza){ // la clase Perros hereda todo de la clase Animal y le agrega la raza
		super(especie,edad,color);
		this.raza = null ;
	}
	static ladrar (){
		alert("Wow!");
	}
	set setRaza (newRaza){ // al llamar setRaza junto a un parametro, se cambiara el valor de raza al dato con el que se le llamo
		this.raza = newRaza;
	}
	get getRaza (){ // retorna el valor de raza
		return this.raza;
	} 
}

const perro = new Perros("perrito", 11, "negro", "");
const gato = new Animal("gatito", 2, "cafe");
const pajaro = new Animal("pajarito", 1, "azul");

console.log(perro.getRaza) // en la consola nos mostrara null ya que no ha sido declarada 

perro.setRaza = "doberman"; // al llamar a setRaza y enviarle un nuevo valor, la declaracion de raza cambiara 

console.log(perro.getRaza) // mostrara en la consola la "nueva raza" que tiene 

