const boton1 = document.querySelector(".item1");
const boton2 = document.querySelector(".item2");
const boton3 = document.querySelector(".item3");
const boton4 = document.querySelector(".item4");
const boton5 = document.querySelector(".item5");
const boton6 = document.querySelector(".item6");
const boton7 = document.querySelector(".item7");
const boton8 = document.querySelector(".item8");
const boton9 = document.querySelector(".item9");
const boton10 = document.querySelector(".item10");
const boton11 = document.querySelector(".item11");
const boton12 = document.querySelector(".item12");
const boton13 = document.querySelector(".item13");

prompt
let youtube = "https://youtube.com";
ventana = null;

boton1.addEventListener("click",()=>{
    ventana =window.open(youtube);
})
boton2.addEventListener("click",()=>{
    ventana.close()   
})
boton3.addEventListener("click",()=>{
    console.log(ventana.closed)   
})
boton4.addEventListener("click",()=>{
    alert("Hoy es un gran dia...")
})
boton5.addEventListener("click",()=>{
    print()
})
boton6.addEventListener("click",()=>{
    prompt("Cual es tu nombre?")
})
boton7.addEventListener("click",()=>{
    let dato = confirm("Estas seguro que deseas enviar x ......");
    console.log(dato);
})
boton8.addEventListener("click",()=>{
    console.log(window.screen);
})
boton9.addEventListener("click",()=>{
    window.scroll(0,70)
})
boton10.addEventListener("click",()=>{
    const scrollLeft = window.scrollX;
    const scrollTop = window.scrollY;
    console.log(`scrollX ${scrollLeft} <br> scrollY ${scrollTop}`)
})
boton11.addEventListener("click",()=>{
    console.log(`ubicacion ${window.location.href}`)
})
boton12.addEventListener("click",()=>{
    console.log(`dominio ${window.location.hostname}`)
})
boton13.addEventListener("click",()=>{
    console.log(`ubicacion del dominio ${window.location.pathname}`)
})
