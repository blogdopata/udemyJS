


/* coge todas las propiedades de un objeto y transmtirlas a otras */

/* en ECMA 5 : */ 

function mezclar(objReceptor , objDonador){

	Object.keys(objDonador).forEach(function(key){

		objReceptor[key]  = objDonador[key];

	})
	return objReceptor;
}

var objReceptor = {};

var objDonador = {
	//nombre:"mi archivo JS",
	get nombre(){
		return "mi-archivo.js"
	},
	prueba(){
		return "valor d prueba"
	}
}

/*console.log(mezclar(objReceptor, objDonador));*/

/* EN ECMA 6*/

console.log(Object.assign(objReceptor, objDonador));