// SPREAD permite especificar uin arregloe que sera
// separado y cada item enviado sera un argunmento independeinte

var numeros = [1,5,51,11,22,33];

//var  max = Math.max.apply(Math, numeros);
var  max = Math.max(...numeros);

console.log(max);