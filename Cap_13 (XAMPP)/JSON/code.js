// --- OBJETO ASOCIATIVO (NO JSON) ---
let obj1 = {
    nombre : "kevin",
    apellido : "guevara"
};

// --- OBJETO ASOCIATIVO (JSON) ---
let obj2 = {
    "nombre" : "kevin",
    "apellido" : "guevara"
};

// JSON deserializado => objeto con formato json
let obj3 = {"nombre" : "kevin","apellido" : "guevara"};

// JSON serializado => cadena de texto con formato json
let obj4 = `{"nombre" : "kevin","apellido" : "guevara"}`;

// --- METODO PARA CAMBIAR A SERIALIZADO ---
let objetoSerializado = JSON.stringify(obj3)

console.log("deserializado => "+typeof obj3)
console.log("se cambio a serializado => "+typeof objetoSerializado)
console.log(`----------`)

// --- METODO PARA CAMBIAR A DESERIALIZADO ---
let objetoDeserializado = JSON.parse(obj4)

console.log("serializado => "+typeof obj4)
console.log("se cambio a deserializado => "+typeof objetoDeserializado)