let cadena = "abc def GHI  ";
let cadena2 =  "abc";

document.write(`<code> <b>
	let cadena = "abc def GHI "; <br> 
	let cadena2 =  "abc"; </b> <br><br>
	</code>`);

// Concatena (x) valor con (y) valor
concat = cadena.concat(cadena2); 
document.write("<b>concat</b> => " + concat + "<br><br>");

// Verifica que x cadena tenga al principio x valor
starsWith = cadena.startsWith(cadena2); 
document.write("<b>starsWith</b> => " + starsWith + "<br>");

// Verifica que x cadena tenga al final x valor
endsWith = cadena.endsWith(cadena2); 
document.write("<b>endsWith</b> => " + endsWith + "<br>");

// Verifica que (x) valor este en (y)sin importar el lugar
includes = cadena.includes(cadena2); 
document.write("<b>includes</b> => " + includes + "<br>");

// Verifica que (x) valor este en (y) retornando la ubicadon del primer elemento
indexOf = cadena.indexOf(cadena2); 
document.write("<b>indexOf</b> =>  " + indexOf + "<br>");

// Verifica que (x) valor este en (y) retornando la ubicadon del ultimo elemento
lastIndexOf = cadena.lastIndexOf("F"); 
document.write("<b>lastIndexOf</b> => " + lastIndexOf + "<br><br>");

// Rellena (x) cosas al principio de de la cadena hasta cumplir con los caracteres indicados
padStart = cadena.padStart(25,"..."); 
document.write("<b>padStart</b> => " + padStart + "<br>");

// Rellena (x) cosas al final de de la cadena hasta cumplir con los caracteres indicados
padEnd = cadena.padEnd(25,"..."); 
document.write("<b>padEnd</b> => " + padEnd + "<br>");

// repite (x) cosas en la cadena hasta cumplir con los caracteres indicados
repeat = cadena.repeat(3); 
document.write("<b>repeat</b> => " + repeat + "<br><br>");

// Separa la cadena de texto con el caracter indicado convirtiendo la cadena en array
split = cadena.split(" "); 
document.write("<b>split</b> => " + split + " <b>(separa todos los elemetos al encontrar un espacio )</b><br>");// al convertirlo en array, los elementos se separan por comas

// Separa la cadena de texto desde la ubicacion inicial y final convirtiendolo en un array
substring = cadena.substring(0,5); 
document.write("<b>substring</b> => " + substring + " <b>(ubicacion 0 al 5)</b><br>");

// Convierte en minuscula (x) cosa
toLowerCase = cadena.toLowerCase(); 
document.write("<b>toLowerCase</b> => " + toLowerCase + "<br>");

// Convierte (x) cosa en string
toString = cadena.toString(); 
document.write("<b>toString</b> => " + toString + "<br><br>");

// Elimina los espacion de (x) cosa al principio y al final
let trim = cadena.trim(); 
document.write("<b>cadena.length</b> => " + cadena.length + "<br>");
document.write("<b>trim.length</b> => " + trim.length + "<br>");
document.write("<b>trim</b> => " + trim );
// trimStart: elimina los espacios del inicio
// trimEnd: elimina los espacios del final
