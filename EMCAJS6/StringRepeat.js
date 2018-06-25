 

 let texto =" hola";

 console.log(texto.repeat(2));
 console.log("0".repeat(2));

 const ESPACIOS = 12 ;

 let nombres =  ["victor","goten","trunks"];
 let edads = [22,23,24,25];

 for( i in nombres){
 	let dif = ESPACIOS - nombres[i].length;
 	console.info( nombres[i] + " ".repeat(dif) + "| " + edads[i])
 }