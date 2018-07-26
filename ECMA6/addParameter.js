

// function  hi(msj = "GO PRO" , time){

//     // msj = msj || "Hola mundo";
//     // msj = ( typeof msj !== "undefined") ? msj : "MSJ DEFECTO";
//     setInterval( function(){
//         console.log(msj);
//     },time);
// }

// hi(undefined,1000);

function gg( fn = fnTemporal , persona = {nombre: "victor"}){
    console.log(typeof fn + " ok");

    if (typeof fn === "undefined") {
        console.log("No es una funcion");
        return;

    }
    fn();
    console.log(persona);
}

function fnTemporal(){
    console.log("HOLRA MUNDO FN");
}

var persona = {
    nombre: "jose"
}

gg(fnTemporal, persona);

if(true) console.log("enttro al if :D");
