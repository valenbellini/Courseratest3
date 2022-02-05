function orderChickenWith (sideDish){
	// Opcion 1 //
	if(sideDish === undefined){
		sideDish = "Whatever";
	}
	// Opcion 2 (corta) //
	sideDish = sideDish || "Whatever!";

 	//Consecuencia
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith(); // Si no ingresamos nada, pone "Whatever" en vez de "undefined"