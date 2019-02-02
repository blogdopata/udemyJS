
function etiqueta(literales, ...substituciones){


    let resultado = "";

    console.log(literales);
    console.log(substituciones);

    literales[1] = 5;
    console.log(literales[1]);
    
    for(let i = 0; i<substituciones.length;i++){

        resultado+= literales[i];
        resultado+= substituciones[i];

    }
    
    return resultado;  
}






let unidades = 5;
let costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades*costo_unitario} dolares`;

console.log(mensaje);



