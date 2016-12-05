function rysujChoinke(rows) {
	for (var i = 1 ; i <= rows; i++) {
		var star = '';
		for (var n = 1 ; n <= i*2-1; n++) {
			star += '*';
		}
		
		
		console.log(star)
	}
}
rysujChoinke(5);