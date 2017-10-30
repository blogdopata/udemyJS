var app = new Vue({
	el: '.vue',
	data:{
		mensaje:'Aprende Vue.JS Ez'
	}
})



function Persona(){
	var nombre = "victor";
	var apellido= {
		paterno:'caballero',
		materno: 'cabrera'
	}
	console.log(nombre);
}

var yo = new Persona();
console.log(yo.nombre);