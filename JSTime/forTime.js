/*
var nombres = ["victor", "jose" ,function(){}, "pedro",{} , 22, "carlos" , function(){},true]

for (var i = 0 ; i <= nombres.length; i++) {
	
	// if( typeof nombres[i] === "number"){
	// 		console.log(nombres[i]);
	// 		break;
	// }
	console.log(i);
	console.log(nombres[i] );

}
*/

var Persona = function(){
	this.nombre = "victor";
	this.ape = "caballero";
	this.edad = 30;
};

Persona.prototype.dir = "Lince";


var victor = new Persona();

for(prop in victor){
// solo las propiedads sin los prototipos : 

 if(!victor.hasOwnProperty(prop))

 		continue;


	console.log(prop, victor[prop])

}