(function(){
	var $cajaRoja = $(".cajaRoja");

 function mover( dir ){

 		$cajaRoja.clearQueue();

 		switch ( dir ){

 			case "arr":
 				$cajaRoja.animate({
 					top:"-=50px"
 				},200);
 			break	;

 			case "aba":
 				$cajaRoja.animate({
 					top:"+=50px"
 				},200);
 			break;

 			case "der":
 				$cajaRoja.animate({
 					left:"+=50px"
 				},200);
 			break;

 			case "izq":
 				$cajaRoja.animate({
 					left:"-=50px"
 				},200);
 			break;

 			case "res":
 				$cajaRoja.animate({
 					left:"0px",
 					top:"0px"
 				},1000);
 			break;

 		}
}

		$(document).on("keypress",function(e){
					var keyCode = e.keyCode;
					console.log(keyCode)
					switch (keyCode){

						case 38:
							mover("arr");
						break ;
						
						case 40:
							mover('aba');
						break ;

						case 37:
							mover('izq');
						break;

						case 39:
							mover('der');
						break ;


					}


		});

 		$("button").on("click",function(){
 				var  dir  = $(this).data("dir");
 				mover( dir );

 		});


})();