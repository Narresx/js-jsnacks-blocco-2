console.log('JS OK');

/* Traccia:
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const numbers = [];
let sum = 0;
let i = 0;

while (i < 10) { // Finchè il numero degli elementi dell'array non arriva a 10
    let randomNumber = Math.floor(Math.random() * 50) + 1; // Generiamo numeri rando da 1 a 50
    i++;
    numbers.push(randomNumber);
}
console.table(numbers)

let o = 1; // Parto da una posizione dispari

while (o < numbers.length) {
    sum += numbers[o];
    o += 2; // Aggiungo il valore della seconda posizione successiva dell'array in modo da sommare solo i numeri in posizione dispari 
}

console.log(sum);



