
/* Los simbolos siempre son diferentes */
/* No se puede castear los simbolos */

let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol();
let persona =  {
    [segundoNombre] :"caballero"
 
};

persona[primerNombre] = 'Victor';
// Solo se puede imprimir si la llamamos conmutadamente persona[primerNombre]
console.log(persona.primerNombre);
console.log(persona[segundoNombre]);
console.log(primerNombre);

 /* -------- recorrer un objeto -------- */

 let personaX = {
     nombre: "victor",
     apellido:"Caballero",
     edad:29,
     casado: true
 }

 console.log(  Object.entries(personaX));
   
 
 for( key in personaX){
     console.log(`${key} y su valor es:  ${personaX[key]}`);
 }

 
