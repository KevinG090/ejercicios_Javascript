// --- GET ---
axios("info.txt")
    .then(res=>console.log(res.data))
;

// --- POST ---
axios.post("https://reqres.in/api/users",{
        "nombre":"lucas",
        "apellido":"dalto"
})
    .then(res=>console.log(res.data.apellido))