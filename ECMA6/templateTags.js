

function etiqueta(literales, ...substituciones ) {


    let resultado = "";

    if ( substituciones.length == 0 ) {
    	return literales[0];
    }

    let primeroSubstitucion =  ( literales.length > 0 && literales[0] === "") ? true : false ;
    for (let i = 0; i < literales.length; i++) {
        if ( i == 0 && primeroSubstitucion ) { 
            resultado += substituciones[0];
            i++;
        } 
        
        if( literales[i] )      resultado += literales[i];
        if( substituciones[i] ) resultado += substituciones[i];
        
    }
    return  resultado;
}
let unit=5,  
	costo_unit = 10;
	costo_unit2 = 12;

let msj= etiqueta `${unit} Lapices cuestan ${costo_unit} soles a tasa de cambio` ;

console.log(msj);

// el RAW ---> es  una funcion que nos permite evaluar
// las cadenas de texto sin escaparlas.