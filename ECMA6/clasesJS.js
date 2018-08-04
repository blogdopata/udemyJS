

 /*  ECMA 5 CLASES*/

 function Persona(nombre){
     this.nombre = nombre;
     this.gritarName = function(){
        console.log(this.nombre.toUpperCase() );
     }
 }

 Persona.prototype.decirNombre = function(){
     console.log(this.nombre);
     
 }

 let victor = new Persona("victor") ;
 victor.gritarName();
 victor.decirNombre()
console.log( "---------------------------------------");

class PersonaX{

    constructor(nombre){
        this.nombre = nombre;
    }
    decirNombre(){
        console.log(this.nombre);
    }

}

let victorX = new PersonaX("victorX")

victorX.decirNombre();
console.log( "---------------------------------------");
/* Clase en forma de Expression */

let Perzona  = class{
    constructor(){
        this.nombre = "";
        this.edad  = 30 ;
        this.direccion = "CALLE LOL x3x2"
    }
    decirName(){
        console.log(`Mi edad es  :  ${this.edad}`);
        
    }
}

let victorino = new Perzona("victorinoxxx");
console.log(victorino);

console.log(typeof victorino);
console.log(victorino instanceof Perzona);

console.log( "---------------------------------------");





/* Clases como parametro a una funcion */

function creadorClases(definicionClase){
    return new definicionClase();
}

let objeto = creadorClases( class{
    constructor(){
        this.nombre = undefined;
        this.edad = 30;
    }
    saludar(){
        console.log("hola");
        
    }
});
console.log(objeto);

objeto.saludar();