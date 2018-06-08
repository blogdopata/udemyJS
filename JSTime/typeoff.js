

function identifica( valor ){

	if( valor instanceof Persona){
			 console.info("SI")
	}else {
		console.log(valor);
	}
}


function Persona(nom , edad){

	this.nombre =  nom || "victor" ;
	this.edad =  edad || 25 ;
}

var  checo = new Persona("zeze" , 30);

identifica( 5);