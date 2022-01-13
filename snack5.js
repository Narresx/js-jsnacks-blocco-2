console.log('JS OK');

/* Traccia
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

// Creiamo due array con numeri casuali ed elementi diversi.

const numbers1 = [];
let i = 0;
const numbers2 = [];
let o = 0;

while (i < 10) { // Finchè il numero degli elementi dell'array non arriva a 10
    let randomNumber1 = Math.floor(Math.random() * 50) + 1; // Generiamo numeri random da 1 a 50
    i++;
    numbers1.push(randomNumber1);
}
console.table(numbers1);

while (o < 5) { // Finchè il numero degli elementi dell'array non arriva a 5
    let randomNumber2 = Math.floor(Math.random() * 50) + 1; // Generiamo numeri random da 1 a 50
    o++;
    numbers2.push(randomNumber2);
}

console.table(numbers2);

// Aggiungiamo elementi al secondo erray finchè non avrà lo stesso numero di elementi del primo

while (numbers1.length != numbers2.length) {
    let randomNumber3 = Math.floor(Math.random() * 50) + 1; // Generiamo numeri random da 1 a 50
    numbers2.push(randomNumber3);
}

console.table(numbers2);



