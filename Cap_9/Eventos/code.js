const button1 = document.querySelector(".item1");
const button2 = document.querySelector(".item2");
const button3 = document.querySelector(".item3");
button1.addEventListener("click",(e)=>{
    console.log(e.target);
});
button2.addEventListener("click",(e)=>{
    alert("diste un click")
});
button3.addEventListener("dblclick",(e)=>{
    alert("diste doble click")
});

const div1 = document.querySelector(".div1");
div1.addEventListener("mouseover",()=>{
    alert("se movio en el elemento o entre sus hijos")
})

const div2 = document.querySelector(".div2");
div2.addEventListener("mouseout",()=>{
    alert("se salio de un elemento o entre sus hijos")
})

const button4 = document.querySelector(".item4");
button4.addEventListener("contextmenu",()=>{
    alert("diste click derecho")
});

const div3 = document.querySelector(".div3");
div3.addEventListener("mousemove",()=>{
    alert("se movio el mouse en el elemento")
})