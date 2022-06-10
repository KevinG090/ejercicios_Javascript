let array = ["maria","pepito","juan"];

document.write(`array = [ ${array} ] <br>`);
document.write(`tipo de elemento : ${typeof(array)} <br><br>`)

//join convierte un objeto en cadena de texto y ademas, se le puede agregar un separador en el join

let join = array.join("-");

document.write(`join = ${join} <br>`);
document.write(`tipo de elemento : ${typeof(join)} <br><br>`)
 
let nombres = ["kevin","carlos","maira"];
document.write(`nombres =[ ${nombres} ]<br>`);

// slice devuelve una parte del array dentro de otro array indicando la ubicacion de los elementos (no incluye el ultimo)

let slice = nombres.slice(0,2);
document.write(`slice =[ ${slice} ]<br>`);
document.write(`nombres =[ ${nombres} ]<br><br>`);

document.write("----------------------------------------------<br><br>")

// filter y forEach son "ciclos" la cual toman el valor de cada elemento de una variable/array
// en la primera vuelta filter/forEach son "kevin", en la segunda son "carlos" y asi sucesivamente 

// dentro de filter/forEach se crea una funcion, en este caso se llama nombre 

let nombres1 = ["kevin","carlos","maira","pepe","juan","Alejandro","luis"];

nombres1.filter(nombre => {document.write(`nombre : ${nombre} <br>`)})
document.write(`<br>`)
nombres1.forEach(nombre => {document.write(`nombre : ${nombre} <br>`)})
document.write(`<br><br>`)

// por otro lado con filter podemos crear otro array con los elementos otro con algunas especificaciones
// por ejemplo : todos los elementos de nombres1 entren en nombres2 siempre y cuando la cantidad 
// de letras de cada elemento sea mayor o igual a 5 y si no que no entre ...

let nombres2 = nombres1.filter(nombre => nombre.length >= 5)
document.write(`nombres : ${nombres2} <br> nombres es un : ${typeof(nombres2)}`)






