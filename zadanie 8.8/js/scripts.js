var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
	animal = animal.toUpperCase();

var textNew = text.replace('Papugi', animal);
 
var textHalf = textNew.substr(0, textNew.length/2);

console.log(textHalf);
	