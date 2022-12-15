async function getId (){
    const res = await axios("https://reqres.in/api/users?page=2");
    try{
        const div = document.createElement("DIV");
        div.classList.add("content");
        const id = document.createElement("h3");
        id.innerHTML = "id: "
        id.classList.add("title");
        div.appendChild(id)
        respuesta = Object.keys(res.data.data).length
        for (i=0; i < respuesta; i++){
            const p = document.createElement("P");
            p.innerHTML += res.data.data[i].id
            p.classList.add("data");
            div.appendChild(p)
        }
        document.querySelector("#info").appendChild(div)
    }
    catch(e){console.log(e)}
}
async function getEmail (){
    await axios("https://reqres.in/api/users?page=2")
    .then(res=>{
        const div = document.createElement("DIV");
        div.classList.add("content");
        const id = document.createElement("h3");
        id.innerHTML = "Email: "
        id.classList.add("title");
        div.appendChild(id)
        respuesta = Object.keys(res.data.data).length
        for (i=0; i < respuesta; i++){
            const p = document.createElement("P");
            p.innerHTML += res.data.data[i].email
            p.classList.add("data");
            div.appendChild(p)
        }
        document.querySelector("#info").appendChild(div)
    })
    .catch(err=>console.log('error =>' + err))
}
async function getName (){
     await axios("https://reqres.in/api/users?page=2")
    .then(res=>{
        const div = document.createElement("DIV");
        div.classList.add("content");
        const id = document.createElement("h3");
        id.innerHTML = "Nombre: "
        id.classList.add("title");
        div.appendChild(id)
        respuesta = Object.keys(res.data.data).length
        for (i=0; i < respuesta; i++){
            const p = document.createElement("P");
            p.innerHTML += res.data.data[i].first_name
            p.classList.add("data");
            div.appendChild(p)
        }
        document.querySelector("#info").appendChild(div)
    })
    .catch(err=>console.log('error =>' + err))
}
async function getLastName (){
    await axios("https://reqres.in/api/users?page=2")
    .then(res=>{
        const div = document.createElement("DIV");
        div.classList.add("content");
        const id = document.createElement("h3");
        id.innerHTML = "Apellido: "
        id.classList.add("title");
        div.appendChild(id)
        respuesta = Object.keys(res.data.data).length
        for (i=0; i < respuesta; i++){
            const p = document.createElement("P");
            p.innerHTML += res.data.data[i].last_name
            p.classList.add("data");
            div.appendChild(p)
        }
        document.querySelector("#info").appendChild(div)
    })
    .catch(err=>console.log('error =>' + err))
}

document.querySelector(".id").addEventListener("click",getId);
document.querySelector(".email").addEventListener("click",getEmail);
document.querySelector(".nombre").addEventListener("click",getName);
document.querySelector(".apellido").addEventListener("click",getLastName);
