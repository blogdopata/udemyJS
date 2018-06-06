

function Persona(Go ){

	this.nombre =    "victor" || Go;
	this.ape = "caballero";
	this.edad = 30;
	this.impriFull = function(){
			console.log(this.nombre + " "+ this.ape);

	}
}
	
var juan = new Persona("sabina");

juan.impriFull();