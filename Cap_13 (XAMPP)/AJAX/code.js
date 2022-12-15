// ---- GET ----

// const peticionGet = new XMLHttpRequest();
let peticionGet;

if (window.XMLHttpRequest) peticionGet = new XMLHttpRequest;
else peticionGet = new ActiveXObject("Microsoft.XMLHTTP");

peticionGet.addEventListener("load",()=>{
    let respuesta;
    if (peticionGet.status == 200) respuesta= peticionGet.response;
    else respuesta = "lo siento, no se encontro"
    console.log(JSON.parse(respuesta))
})

peticionGet.open("GET","info.txt");
peticionGet.send()

// ---- POST ----

let peticionPost;

if (window.XMLHttpRequest) peticionPost = new XMLHttpRequest;
else peticionPost = new ActiveXObject("Microsoft.XMLHTTP");

peticionPost.addEventListener("load",()=>{
    let respuesta;
    if (peticionPost.status == 200 || peticionPost.status == 201) respuesta= peticionPost.response;
    else respuesta = "lo siento, no se encontro"
    console.log(JSON.parse(respuesta))
    console.log(peticionPost.status)
})

peticionPost.open("POST","https://reqres.in/api/users");
peticionPost.setRequestHeader("Content-type","application/json;charset=UTF8")

peticionPost.send(JSON.stringify({
    "nombre": "david",
    "trabajo": "leader"
}))