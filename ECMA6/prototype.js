


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

// Creamos el objeto angora de tipo gato
let angora = Object.create(gato);

console.log(Object.getPrototypeOf(angora) === gato , "Es cherto");

angora.sonido();
angora.chillin();


/*Cambiar el prototipo de un objeto por otro Object.setPrototypeOf  */
Object.setPrototypeOf(angora,perro);

console.log(angora)


/*Cambiar el prototipo de un objeto por otro Object.getPrototypeOf  */
console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
//angora.chillin();


/*  SUPER */

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