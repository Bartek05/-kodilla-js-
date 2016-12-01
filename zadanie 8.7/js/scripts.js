var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

	console.log (allNames);

var newName = 'Marian'

if (allNames.indexOf(newName) === -1) {
	console.log (newName);
}
var allNames = ["Asia", "Kasia", "Ola", "Jola", "Piotrek", "Marek", "Arek", "Jarek"];
allNames[8] = 'Marian';
	console.log (allNames);