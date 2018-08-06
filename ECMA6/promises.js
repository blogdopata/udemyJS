


function tareaAsincrona(){

    let promesa = new Promise( function (resolve,reject) {
        setTimeout(function(){
            console.log("ME ejecuto xxxD");
            resolve();
        },5000)
   
    });
    return promesa;
}

tareaAsincrona().then( 
    function(){ 
        console.log("todo Ok!");
     },
    function(){  
        console.error("todo bad");
        
     });

console.log("Me imprimo no mas");



