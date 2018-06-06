

function Jugador(nombre){
	this.nombre = nombre;
	this.hp = 100 ;
	this.sp = 100;
	this.curar = function(jugadorObj){

		if(this.sp >= 40){
			this.sp -= 40;
			jugadorObj.hp +=20 ;
		}else {
			console.info(this.nombre + " no tiene SP")
		}
			this.estado(jugadorObj);

		
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

warrior.curar(legolas);
console.log(warrior);
console.log(legolas);