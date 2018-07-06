


let gato = {
	sonido(){
		console.log("miau")
	},
	chillin(){
		console.log("MIAMUAMUAU");
	}

}

let perro = {
	sonido(){
		console.log("woof")
	}
};


let angora = Object.create(gato);

console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillin();

Object.setPrototypeOf(angora,perro);


/*Cambiar el prototipo de un objeto por otro Object.getPrototypeOf  */
console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
//angora.chillin();


/*  SUOER */

let persona = {
	saludar(){
		return "hola";
	}
};

let amigo = {
	loHace(){
		return super.saludar() + " ,Saludillos!!!";
	}
}

/* Que amigo sea d tipo persona */
Object.setPrototypeOf(amigo, persona);


console.log(amigo.saludar());