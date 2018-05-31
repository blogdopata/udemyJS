(function(){


$.bigBox = function(opciones , callback){
	opciones = $.extend({
		fa: "fa-thumbs-o-up",
		titulo: undefined,
		contenido: undefined,
		boton: "Aceptar"

	},opciones);

	if( opciones.titulo === undefined){
		alert(" El titulo es necesario ");
		return;
	}
	if( opciones.contenido === undefined){
		alert(" El contenido es necesario ");
		return;
	}



	var contenido = "";

			contenido = '<div class="bigBox-fondo"></div>';
			contenido +=  '							<div class="bigBox-contenedor">';
			contenido +=  '								<div class="bigBox-Cerrar"><i class="fa fa-times " ></i></div>';	
			contenido +=  '								<div class="bigBox-circulo"><i class="fa '+ opciones.fa +' fa-4x"></i></div>';	
			contenido +=  '								<div class="bigBox-contenido">';
			contenido +=  '										<span class="bigBox-titulo">'+ opciones.titulo +'</span>';
			contenido +=  '										<span class="bigBox-texto">'+ opciones.contenido +'</span>';
			contenido +=  '								</div>';
			contenido +=  '								<button class="bigBox-boton">'+ opciones.boton +'</button>';
			contenido +=  '							</div>';

	$("body").append( contenido );

	animar_entrada();

	// FUNCION DEL BOTON CERRAR 

	$(".bigBox-Cerrar").on("click", function(){
			animar_salida();
			if( typeof callback == 'function'){
				callback(' boton-cerrar');
			}

	});

	$(".bigBox-boton").on("click", function(){
			animar_salida();
			if( typeof callback == 'function'){
				callback(' boton-principal');
			}

	});
	// animar la entrada
	function animar_entrada(){

		var 	$fondo = $(".bigBox-fondo");
		var 	$bigBox = $(".bigBox-contenedor");
				//	$fondo.fadeIn(300);

		var anchoP = $(window).width();
		var altoP = $(window).height();
		
		var anchoB = $bigBox.width();
		var altoB = $bigBox.height();

		$bigBox.css({
			top: (altoP/2) - (altoB/2),
			left: (anchoP/2) - (anchoB/2)
		})


					$fondo.show()	;
					$bigBox.show();

					var tl = new TimelineMax();
							tl.to( $fondo,0.5,{opacity:0.3})
								.to( $bigBox,0.5,{opacity:1},"-=0.5")
								.from($bigBox,0.8,{y:"-=20",  ease: Bounce.easeOut },"-=0.5");

	}



	function animar_salida(){

		var 	$fondo = $(".bigBox-fondo");
		var 	$bigBox = $(".bigBox-contenedor");
			
					var tl = new TimelineMax();
							tl.to( $fondo,0.3,{opacity:0})
								.to( $bigBox,0.3,{opacity:0, onComplete:remover_bigbox},"-=0.5");

	}

	function remover_bigbox(){
		var 	$fondo = $(".bigBox-fondo");
		var 	$bigBox = $(".bigBox-contenedor");

		$fondo.remove();
		$bigBox.remove();

	}




}	;



})();