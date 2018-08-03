

/* Los Maps al igual que lo SET tienen los sgts metodos :
Has()  --- delete() --- Clear() --- size () --- Iteracciones */
/* Agrregamos data con set */
let mapa  = new Map();

mapa.set("nombre", "victor");
mapa.set("edad",29);
mapa.set();

console.log(mapa);
console.log(mapa.size);

console.log(mapa.get("nombre")); // Victor
console.log(mapa.get("edad")); // 29


console.log(mapa);

// Borrar la llave 
mapa.delete("nombre");
console.log(mapa);

mapa.has("nombre");

// Solo para borrar el valor de edad
mapa.set("edad");

console.log(mapa);

// Borrar todo el mapa
console.log(mapa.clear())
console.log(mapa);

let lol = new Map();
lol.set("isKey", "Estrue");
console.log("/* ----------------------- */");
lol.set(function(){},undefined)

console.log(lol);
