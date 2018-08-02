

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
