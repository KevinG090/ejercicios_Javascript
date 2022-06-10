let num1 = Math.sqrt(25);
document.write(`<b>Raiz cuadrada de 25 es :</b> ${num1} <br>`);

let num2 = Math.sqrt(27);
document.write(`<b>Raiz cubica de 27 es :</b> ${num2}<br>`);

let num3 = Math.max(27,11,56,6234,7634,74,1,24);
document.write(`<b>El numero mayor es :</b> ${num3}<br>`)

let num4 = Math.min(27,11,56,6234,7634,74,154,24);
document.write(`<b>El numero menor es :</b> ${num4}<br>`)

let num5 = Math.random();
document.write(`<b>El aleatorio entre 0 y 1 es :</b> ${num5}<br>`)

// en caso que se quiera un numero entre 0 y 100, el num5 se debe multiplicar por 99 
// y si se quiere tener un numero sin decimales se utiliza el metodo round()

let num6 = Math.random()*99;
document.write(`<b>El aleatorio entre 0 y 100 es :</b> ${num6}<br>`)

let num6_1 = Math.round(num6);
document.write(`<b>El aleatorio entre 0 y 100 sin decimales redondeado :</b> ${num6_1}<br>`)

// el floor redondea el numero hacia abajo, por ejemplo : x es 3.5, floor lo devuelve a 3,
// si x es 4.9 floor lo devuelve a 4, sin embargo, si no se quiere llegar al numero 0, a floor se le suma 1 

let num6_2 = Math.floor(num6);// +1 seria lo mejor
document.write(`<b>El aleatorio entre 0 y 100 redondeado hacia abajo </b> ${num6_2}<br>`)

//elimina los decimales

let num7 = Math.trunc(11.9);
document.write(`<b>El numero sin decimales es :</b> ${num7}<br>`)