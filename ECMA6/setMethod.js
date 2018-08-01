

let items = new Set([8,9]);
console.log(  items instanceof Object);

items.add(1);
items.add(21);
items.add(5);
console.log(items);
console.log(items.has(21));

/* Borrar items*/
items.delete(5)
console.log(items);
/* borrar todos los elementos del set*/

items.clear();
console.log(items);

/* Convertir un set en un Array */

let num = [1,2,3,4,5,6];
let SetNum = new Set(num);
console.log(SetNum);

