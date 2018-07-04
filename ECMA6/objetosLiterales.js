
 /* ECMA5 --> los objetos : */

 var  obj = {
 	nombre: "victor",
 	edad : 20
 }

 /* EMCA6 objetos literales */

 function createGuy(nombre,apellido,edad){
 	return{ 
 		nombre,
 		apellido,
 		edad
 	}
 }

var victor = createGuy("victor","Caballero",30);

console.log(victor);

/*  METODOS CONCISOS !!!! */

var persona = {
	nombre: "victor",
	getNombre(){
		console.log(this.nombre);
	},
	getOtroNombre: function(){
		this.obten();
	},
	obten(){
		console.log("llame a obten");
	}

}


persona.getNombre();
persona.getOtroNombre()

console.log(persona.__proto__.name);