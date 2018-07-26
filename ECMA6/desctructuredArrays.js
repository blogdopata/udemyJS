

let frutas =  ["banado", "pera","manzada"];

let [fruta1,frtuta2] = frutas;

/*console.log(fruta1, frtuta2);*/

let [,,fruta3] = frutas;
/*console.log(fruta3);*/

let otraFruit = "manzada";

[,otraFruit] = frutas;

/*console.log(otraFruit);*/

  let a = 1;
  let b = 2;
  let temp;

  temp = a;
  a = b ;
  b = temp;

/*  console.log(a);
  console.log(b);*/

  [a,b] = [b,a];
  /*console.log(a);
  console.log(b);*/
  
  let arrObj =  [{a:10,b:20}, "LOL", 25];

  [Zeta,x,y] = arrObj;
  /*console.log(arrObj);
  console.log(Zeta.a);
  console.log(x);*/ 

  let nicks = ["julio " ,"pedro", "carlos","frankz","alberto"];

  let [nick1] = nicks;
  
  let  [,,...nickX] = nicks
  
  console.log(nickX);
  
  
  
  
  

  
  