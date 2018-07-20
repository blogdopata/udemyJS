

let ajustes = {
	nombre: "Victor Caballero",
	email: "vcaballerc_c@hotmail.com",
	facebook: "@blogdopata",
	twitter: "@blogdopata",
	premiun: true
}

/* se accedia asu : */
/*
let nombre = ajustes.nombre;
let apellido = ajustes.apellido;
let email = ajustes.email;
console.log(email)*/


/* La destructuracion permite inicilizar 
tambien cambiarle el nombre a una variable */
let { bota:calzado = "adidas" ,premiun: dePago , nombre , email, facebook, twitter, utube="@blogdopataY"  } = ajustes;

console.log( twitter);
console.log(dePago);
console.log(utube);
//console.log(bota);*/
console.log(calzado);
console.log(ajustes)