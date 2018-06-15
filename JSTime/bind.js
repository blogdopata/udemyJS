
var carro = {
		color:"blanco",
		marca: "mazda",
		primir: function  () {
			var salida = this.marca + " - " + this.color ;
			return salida;
		}

}

var carro2 = {
	color:"Negro",
	marca: "Buggatti",

}

//console.log(carro.primir.call(carro2))


var logCar = function(){
	console.log("El auto es : ", this.primir());


}



var MlogCar = logCar.bind(carro);
MlogCar();





/*console.log(carro.primir())

var logCarro = function (arg1, arg2) {
	console.log("Carroz ", this.primir());
	console.log("Argumentos ;",  arg1, arg2);
		console.log("=====================");

}

var  logModeloCarro = logCarro.bind(carro);

logModeloCarro("abc" , "xyz");


logModeloCarro.call( carro, "123" ,"456");
logModeloCarro.apply( carro, ["asd" ,"rsw"]);

console.log(carro.primir.call(carro2));
*/