var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';

var animal = 'Zielone słonie';

var animal = animal.toUpperCase();
	console.log(animal);

var textCharsAfter = text.replace('Papugi', animal);
	console.log (textCharsAfter);

console.log(textCharsAfter.length);  

var textPolowa = text.substr(45, 90)

console.log(animal + textPolowa);
	