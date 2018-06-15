

var objJS = {
	nombre: "Fer", 
	edad : 30
}
console.log(objJS);

var jsonString = JSON.stringify(objJS);

console.log(jsonString);

var ToObj = JSON.parse(jsonString);

console.log(ToObj.nombre);