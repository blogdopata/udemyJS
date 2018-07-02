/*let miFuncion2 = function(valor ){
	return valor;
}
*/

/*  Cn un solo paramestros */
let miFunction1 = valor => valor;


console.log(miFunction1(2));

/* Cnh 2 parametros */ 
let sumar = (num1,num2) => num1 + num2;

console.log(sumar(2,4));

/* Sin  parametros  */
let saludar = () => "Hola mundo" ;

/* Cuando se hace mas de una linea de codigo en la func*/
let  saludaPersona = nombre => {
	let salida = ` Hola ${nombre}`;
	return salida;
}

/* Cuando retornemos un OBJ literal */
let obtenerBook = id => ({ id:id, nombre:"HarryPuter"	});

/* Function anonnima ECMA5 autoEjec */ 
var saludoX  = function(nombre){
	return "Hola " + nombre;
}("Fernando");

/* Function anonimica en EMCA 6 */
let saludoY = (nombre => `Hola ${nombre}`)("vixztor");
console.log(saludoY);