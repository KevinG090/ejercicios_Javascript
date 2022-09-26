
// // Solicitar datos (GET) con formato de texto (deserealizado)
// fetch("https://reqres.in/api/unknown/2")
//     .then(res=>res.text())
//     .then(res=>console.log(res));

// // Solicitar datos (GET) con formato de json (serealizado)
// fetch("https://reqres.in/api/unknown/2")
//     .then(res=>res.json())
//     .then(res=>console.log(res))

// Enviar datos (POST) con formato de json (deserealizado)
fetch("https://reqres.in/api/users",{
    method : "POST" ,
    body : `{"nombre": "laura","apellido": "gomez"}`,// JSON.stringify
    headers: {"Content-type" : "application/json"}
})
    .then(res=>res.json())
    .then(res=>console.log(res))        
;