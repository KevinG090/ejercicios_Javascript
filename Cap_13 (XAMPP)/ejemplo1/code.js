const getName = () =>{
    const div = document.createElement("DIV");
    axios("infos.txt")
        .then(res=>{
            div.innerHTML = res.data.nombre
            div.classList.add("data")
            document.querySelector("#info").appendChild(div)
        })
}
const getAge = async () =>{
    let resultado = await axios("infos.txt");
    let div = document.createElement("DIV");
    div.classList.add("data")
    div.innerHTML = resultado.data.edad
    document.querySelector("#info").appendChild(div)

}



document.getElementById("nombre").addEventListener("click",getName);
document.getElementById("edad").addEventListener("click",getAge);