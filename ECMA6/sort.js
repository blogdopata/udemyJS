
 /* En ECMA 5 se hace achi  */
var arrayPe = [2,23,123,5,0 ,-10];

var arrayPeOrden = arrayPe.sort(function(a,b){
	return a-b;
})
  
   /* En ECMA 6 asi : */

 let ordenES6 = arrayPe.sort((a,b)=> a<	b) ;

 console.log(ordenES6)

