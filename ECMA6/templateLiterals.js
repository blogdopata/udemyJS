
function  obtenerNombre(){
	return "Maria Loba PErez";
}



let nombre = "Victor";
let apellido = "Caballero";

let nombComplete =  nombre + " " + apellido;

console.log(nombComplete);

let nombComplete2 = `El nombre completo es ${nombre} ${apellido}`;

console.log(nombComplete2);

let nombComplete3 = `El nombre completo es ${obtenerNombre()} ${1 +3}`;

console.log(nombComplete3) ;

// sin Templates Literals 
let multiline = "<h1>Titulo </h1> \n <p>Hola Mundo</p>";
console.log(multiline);

// Con Template literetas : 
let multiline2 = `<h1 class="algo">${nombre} </h1>

<p>${apellido}</p> 
I'm PRO `;
console.log(multiline2);