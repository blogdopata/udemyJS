


// ECMA5
// function addAlumno( ){

//     console.log(arguments ); 

//     for(var i =  1; i< arguments.length; i++){
//         arguments[0].push(arguments[i]);
//     }

//     return arguments[0];
// }

// var alum_arr = ["Fernandi"];

// var alum_arr2 = addAlumno(alum_arr , "Maria", "pedro","victor","juan");

// console.log(alum_arr2);

function addAlumno( arr_alumnos, ...alumnos ){

   // console.log(arguments ); 

    for( let i =  0; i< alumnos.length; i++){
        arr_alumnos.push(alumnos[i]);
    }

    return arr_alumnos;
}

let alum_arr = [];

let alum_arr2 = addAlumno(alum_arr , "Maria", "pedro","victor","juan");

console.log(alum_arr2);



function addAlumnoNotas ( arrayNotas, ...notas ){
        console.log(notas);

    for(let i = 0; i<notas.length; i++){
            arrayNotas.push(notas[i]);
    }
    console.log(arrayNotas[4].test1);
}

let arrayNotas = [];
let notas =  addAlumnoNotas(arrayNotas,  10 , 20 , 12 , 14, {test1:10,test2:20} );

// EL parametros REST  (... variable ) solamente va uno y siempre al  último