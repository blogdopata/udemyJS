



function determinaDato ( a){

	if ( a === undefined){
		console.log("A es undefined ... no se q hacer");

	}
	if (typeof a  === "number"){
		console.log("A es un numero y se puede operar");
	}

	if (typeof a  === "string"){
		console.log("A es un texto");
	}
	if (typeof a  === "object"){
		console.log("A es un objeto");
	}

}

determinaDato({});