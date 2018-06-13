

function Persona(Go ){

	this.nombre =    "victor" || Go;
	this.ape = "caballero";
	this.edad = 30;
	this.impriFull = function(){
			console.log(this.nombre + " "+ this.ape);

	}

	this.estado = function ( jugadorObj ){
		console.info(this);
		console.info(jugadorObj);
	}
 
};


var warrior  = new Jugador("warrior");
var legolas = new Jugador("legolas");

console.log(warrior);
console.log(legolas);

var juan = new Persona("sabina");


juan.impriFull();