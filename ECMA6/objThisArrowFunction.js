/* ECMA5 referencia deel THIS 
var manejador  = {
	id : "123",
	init: function(){
		document.addEventListener("click", (function(event){
			console.log(this);
			this.clickInPage(event.type);
		}).bind(this), false);
	}, // Fin del init ,

	clickInPage: function(type){
		console.log("Manejando " + type + " Para el id "+ this.id);
	}
};

manejador.init();

/* EN EL  ECMA6 referencia deel THIS */

var manejador2 = {
	id : "123x",
	init: function(){
		document.addEventListener("click",
			event => this.clickInPage(event.type));
		//console.log(this)
	},
	clickInPage: function(type)  {
		//console.log(this.manejador2.id);
		console.log("Manejando "+ type +  " Para el id "+ this.id);
	}
};

manejador2.init();