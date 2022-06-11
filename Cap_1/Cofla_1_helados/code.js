/*
  -Ingresar el monto y mostrar el mas caro que pueden comprar
  -Indicar el restante
*/

let dineroCofla = prompt ("cuanto dinero Cofla tiene?");
// let dineroRoberto = prompt ("cuanto dinero Roberto tiene? ");
// let dineroPedro = prompt ("cuanto dinero Pedro tiene? ")

let h_Agua = 0.6;
let h_Crema = 1;
let h_Heladix = 1.6;
let h_Heladovich = 1.7;
let h_Helardo = 1.8;
let h_Confites = 2.9;
let h_Pote = 2.9;

dineroCofla = parseFloat(dineroCofla);


if (dineroCofla >= h_Agua && dineroCofla < 1) {
	alert(`Cofla te puedes comprar el Helado de agua : ${h_Agua} USD`);
	alert(`Cofla te sobra ${dineroCofla - h_Agua} USD`);
}
else if (dineroCofla >= h_Crema && dineroCofla < 1.6) {
	alert(`Cofla te puedes comprar el Helado de crema : ${h_Crema} USD`);
	alert(`Cofla te sobra ${dineroCofla - h_crema} USD`);
}
else if (dineroCofla >= h_Heladix && dineroCofla < 1.7) {
	alert(`Cofla te puedes comprar el Helado de heladix : ${h_Heladix} USD`);
	alert(`Cofla te sobra ${dineroCofla - h_Heladix} USD`);
}
else if (dineroCofla >= h_Heladovich && dineroCofla < 1.8) {
	alert(`Cofla te puedes comprar el Helado de heladovich : ${h_Heladovich} USD`);
	alert(`Cofla te sobra ${dineroCofla - h_Heladovich} USD`);
}
else if (dineroCofla >= h_Helardo && dineroCofla < 2.9) {
	alert(`Cofla te puedes comprar el Helado de helardo : ${h_Helardo} USD`);
	alert(`Cofla te sobra ${dineroCofla - h_Helardo} USD`);
}
else if (dineroCofla >= 2.6) {
	alert(`Cofla te puedes comprar el Helado de confites : ${h_Confites} USD o el Pote de Helado:${h_Pote} USD`);
	alert(`Cofla te sobra ${dineroCofla - 2.6} USD`);
}else {
	alert(`Lo siento Cofla , no te alcanza para ningun puto helado con ${dineroCofla} USD`);
}


// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
// 	alert(`Roberto Te puedes comprar el Helado de agua : ${h_Agua} USD`);
// }
// else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
// 	alert(`Roberto Te puedes comprar el Helado de crema : ${h_Crema} USD`);
// }
// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
// 	alert(`Roberto Te puedes comprar el Helado de heladix : ${h_Heladix} USD`);
// }
// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
// 	alert(`Roberto Te puedes comprar el Helado de heladovich : ${h_Heladovich} USD`);
// }
// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
// 	alert(`Roberto Te puedes comprar el Helado de helardo : ${h_Helardo} USD`);
// }
// else if (dineroRoberto >= 2.6) {
// 	alert(`Roberto Te puedes comprar el Helado de confites : ${h_Confites} USD o el Pote de Helado:${h_Pote} USD`);
// }
// else  {
// 	alert(`Lo siento Roberto, no te alcanza para ningun puto helado con ${dineroRoberto} USD`);
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
// 	alert(`Pedro Te puedes comprar el Helado de agua : ${h_Agua} USD`);
// }
// else if (dineroPedro >= 1 && dineroPedro < 1.6) {
// 	alert(`Pedro Te puedes comprar el Helado de crema : ${h_Crema} USD`);
// }
// else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
// 	alert(`Pedro Te puedes comprar el Helado de heladix : ${h_Heladix} USD`);
// }
// else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
// 	alert(`Pedro Te puedes comprar el Helado de heladovich : ${h_Heladovich} USD`);
// }
// else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
// 	alert(`Pedro Te puedes comprar el Helado de helardo : ${h_Helardo} USD`);
// }
// else if (dineroPedro >= 2.6) {
// 	alert(`Pedro Te puedes comprar el Helado de confites : ${h_Confites} USD o el Pote de Helado:${h_Pote} USD`);
// }
// else  {
// 	alert(`Lo siento Pedro, no te alcanza para ningun puto helado con ${dineroPedro} USD`);
// }