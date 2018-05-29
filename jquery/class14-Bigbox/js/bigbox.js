(function(){


$.bigBox = function(opciones){
	opciones = $.extend({


	},opciones);


	var contenido = "";

			contenido = '<div class="bigBox-fondo"></div>';
			contenido +=  '							<div class="bigBox-contenedor">';
			contenido +=  '								<div class="bigBox-Cerrar"><i class="fa fa-times " ></i></div>';	
			contenido +=  '								<div class="bigBox-circulo"><i class="fa fa-thumbs-o-up fa-4x"></i></div>';	
			contenido +=  '								<div class="bigBox-contenido">';
			contenido +=  '										<span class="bigBox-titulo">Genial!!</span>';
			contenido +=  '										<span class="bigBox-texto">Estamos Listos para usar UDEMY</span>';
			contenido +=  '								</div>';
			contenido +=  '								<button class="bigBox-boton">Empezar Curso</button>';
			contenido +=  '							</div>';

	$("body").append( contenido );






	animar_entrada();


	// animar la entrada
	function animar_entrada(){


		var 	$fondo = $(".bigBox-fondo");
		var 	$bigBox = $(".bigBox-contenedor");
				//	$fondo.fadeIn(300);

					$fondo.show()	;
					$bigBox.show();

					var tl = new TimelineMax();
							tl.to( $fondo,0.5,{opacity:0.3})
								.to( $bigBox,0.5,{opacity:1},"-=0.5")
								.from($bigBox,0.8,{y:"-=20",  ease: Bounce.easeOut },"-=0.5");


	}


}	;



})();