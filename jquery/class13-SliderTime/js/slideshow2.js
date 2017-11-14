(function(){
	var ancho = 600;
	var actual = 0;

	var $slideshow = $(".slideShow ul");
	var slides = $slideshow.find("li").length;

	function mover ( dir ){

		( dir === "sig" ) ? actual-- : actual++ ;

		if( actual > 0) {

			actual = (slides - 1)*-1;
		}else if ( actual <= (slides*-1) ){
				actual= 0;
		}

		var margen = actual * ancho;

		console.log(actual)

		console.log(margen)

		$slideshow.animate({
			marginLeft: margen
		},450);
	}

	$(".botSlide").on("click",function(){
		var dir = $(this).data("mov");

		mover(dir);

	})


})();