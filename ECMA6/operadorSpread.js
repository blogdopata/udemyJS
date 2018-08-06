// SPREAD permite especificar in arreglos que sera
// separado y cada item enviado sera un argunmento independeinte

var numeros = [1,5,51,11,22,33];

//var  max = Math.max.apply(Math, numeros);
var  max = Math.max( ...numeros);

console.log(max);


// otro Uso al Spread NIVEL DIOS 

/* COPIAR  PROP y METHODOS DE UN OBJETO A OTRO Y YA NO ALTERARLOS POR REFERENCIA */
let persona1 = {
	nombre:  "victor",
	edad : 29 
}

let persona2 = { ...persona1};
console.log(persona1);

persona2.nombre =  "AlFonso" ; 
persona2.ape =  "Caballero";
console.log(persona2);

/* FIN EJHEMPLO NIVEL DIOS */


/* OTRA FORMA DE USARLO Y MANTENIENDO LAS PROPIEDAD DESPUES DE COPIARLAS */ 
/* Geek 1 va a obtener las propiedades de geek 2 sin alterar su valores    */
let geek1 = {
	nombre :"carlos",
	edad : 20
}
let geek2 = {
	nombre: "victor", 
	edad: 22,
	direccion: "CAlle N ",
	sexo: "Macho"
}

geek1 = {
	...geek2,
	...geek1
}

console.log("Soy de Geek1 ---> ", geek1)



