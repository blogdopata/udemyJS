


let persona  = {
	saludar(){
		return "hola";
	},

	nombre:  "josefo",
		correr(){
		return 'otroMethod';
	}
};


let amigo = {
	saludar(){
	//En  ECMA 5
	//	return Object.getPrototypeOf(this).saludar(this) + " , saludos !!!";
	// en ECMA 6
		return super.saludar() + ", Saludos!!! " ;
 	}
};

Object.setPrototypeOf(amigo , persona);

console.log(amigo.saludar());