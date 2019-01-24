


const SPACE = 12;
let nombres = ["victor","albert","juan"];
let telf = [99999999,99999999,99999999];
console.log(nombres.length);

for( i in nombres){

    let dif =  SPACE - nombres[i].length;
    console.log( nombres[i] + " ".repeat(dif) + " | " + telf[i]);
    
}
