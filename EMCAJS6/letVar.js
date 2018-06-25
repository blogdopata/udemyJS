
var funciones= [] ;

for(var i = 0 ; i<10;  i++) {
	
	funciones.push(function(){
		console.log(i);
	})

}

funciones.forEach( function(func){
	func();
});