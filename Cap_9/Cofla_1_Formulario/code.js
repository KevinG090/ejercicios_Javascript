/*
	Ejercicio de "Soy Dalto" cap 9

	Cofla reprobo dos materias, por ello tiene que enviar un formulario para poder intentar
    aprobarlas

		- contener nombre, mail y materia adeudada
        - validar mails y nombres 
        - enviar al servidor de manera pulida

*/
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const materia = document.querySelector("#materia");
const boton = document.querySelector("#btn-enviar");
const descripcion = document.querySelector("#descripcion");

boton.addEventListener("click",(e)=>{
    let error = validar();
    if (error){
        let errores = document.querySelector("#error").style.display="flex";
        setTimeout(function(){
           errores =  document.querySelector("#error").style.display="none";
        },3000);
    }
    else{
        let correcto = document.querySelector("#correcto").style.display="flex";
        setTimeout(function(){
           correcto =  document.querySelector("#correcto").style.display="none";
        },3000);
    }
})

const validar = ()=>{
    let error = true;
    
    if (nombre.value.length < 5 ){
        descripcion.innerHTML="El nombre debe tener mas de 5 caracteres";
        return  error=true;
    }else if ( nombre.value.length > 40){
        descripcion.innerHTML="El nombre debe tener menos de 20 caracteres";
        return error=true;
    }else if (email.value.length < 12 || 
              email.value.length > 40 ||
              email.value.indexOf("@") == -1 ||
              email.value.indexOf(".") == -1){
        descripcion.innerHTML="El email tiene un error";
        return error=true;
    } else if ( materia.value.length < 4 ||materia.value.length > 40 ){
        console.log("materia mala")
        descripcion.innerHTML="Materia invalida";
        return error=true;}
    else {
        return error=false;
    }
    
}