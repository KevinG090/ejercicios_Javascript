/*
    Ejercicio 1 cap 13 Soy Dalto

    Cofla quiere saber cuantas personas cursan el semestre y cuantas

        - crear un sistema pra obtener esa info
        - mostrala ordenadamente en un sitio web

*/
const getInfo = async () =>{
    let aprobados = document.querySelector("#num-aprobados");
    let desaprobados = document.querySelector("#num-desaprobados");
    try{
        let info = await axios("info.txt")
        aprobados.innerHTML= info.data.aprobados;
        desaprobados.innerHTML= info.data.desaprobados;
    } catch(e){
        console.log(e)
        aprobados.innerHTML="La api fallo";
        desaprobados.innerHTML="La api fallo";
    }
    
}

document.getElementById("getInfo").addEventListener("click",getInfo)