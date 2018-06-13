

function crearCookie (nombre , valor){

	valor = escape(valor);
	var hoy = new Date();
	hoy.setMonth(hoy.getMonth()+1);
 	
 	document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
 	

}

function borrarCookie(nombre){

}


crearCookie("nombre", "victor caballero")


 


var cookies = document.cookie;

console.log(cookies)