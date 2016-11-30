var a = prompt('Wpisz liczbę "a"');
var b = prompt('Wpisz liczbę "b"');
var value = (a*a) + (2 * a * b) - (b*b);

console.log(value);

if ( value < 0 ) {
    console.log('liczba jest ujemna'); 
} else if ( value > 0 ) {
	console.log('liczba jest dodatnia'); 
} else if ( value === 0 ) {
	console.log('liczba jest równa zero'); 
} else {
	console.log('liczba jest nieokreślona');
}