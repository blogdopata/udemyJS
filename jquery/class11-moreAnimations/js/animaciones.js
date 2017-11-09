(function(){

	var $cajaRoja = $(".cajaRoja");
			

	$("#botTamano").on("click", function(){
			$cajaRoja.clearQueue();

			$cajaRoja.animate({
				width:"+=100px",
				height:"+=100px",

		},function(){
			$(this).animate({
				top:"-=10px"
			});

		}).css({
			backgroundColor: 'blue'
		}).animate({
				width:"-=100px",
				height:"-=100px",
				opacity:"0.9"
		},1500,function(){
			$(this).remove();
		});

	})

})();