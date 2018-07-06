
var apellido ="caca";
var persona = {
	"sexo humano" : "marculino"
	
};

var apellido = "apellido2";

persona["primer nombre"] = "Fernando";
persona[apellido] = " Herrera";

persona ={
	[ apellido ] : "Josecalo"
}

console.log(persona["primer nombre"] )
console.log(persona[apellido])
console.log(persona[apellido])
/*-------------------------- PROBANDO--------------------- */
var nick = "blogdopata";
var edad = 23;
var apepat = "Caballero";

var guy = {
	"nombre" : "victor",
	nick,
	edad: edad,
	[apepat] : "carranaa",
	primName(){
		console.log( this.nombre, edad ,apepat, nick)
	}
}



console.log(guy.primName());

console.log(Object.is(persona, persona));