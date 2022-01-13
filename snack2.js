console.log('JS OK');

/* Traccia
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let number = parseInt(prompt('Inserisci un numero.')); // Sciviamo un numero casuale
console.log(number);

let even = 2;

if (number % even === 0) {
    console.log(number);
} else {
    console.log(number + 1)
}

//Il secondo numero in console è pari, altrimenti vedo solo un numero

while (number % even) {
    number += 1;
}

console.log(number);