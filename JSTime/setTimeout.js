

// setTimeout(function(){
// 	console.log("Pasa 5 seg")

// }, 5000);

// var seg = 0;

// var intervalo = setInterval(function(){
// 	seg ++;
// 	console.log("salgo" + seg);
// 		if(seg === 3) {
// 			clearInterval(intervalo);
// 		}

// },100);

var persona =  {
	 nombre : "victor",
	 ape: "Caballero",
	 primir: function(){
	 		var self = this;
	 		setTimeout(function(){
	 			console.log("nombre:  " , this.persona.nombre);
	 		},1000)		;

	 	return true;	
	 }
}

var guy = {
	nombre: "jhonny",
	ape: "charrua"
}

console.log(persona.primir.call(guy))

