try {
	
	throw new Error("error tipo 1");

	console.log("Esta parte nunca se ejecuta");


} 
	catch(e) {
	console.log( e.message )
	

}
finally{
	 console.log( "finalmente");
}

