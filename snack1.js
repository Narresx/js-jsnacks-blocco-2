console.log('JS OK');

/* Traccia:
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

let sum = 0; // Poniamo una variabile fuori dal ciclo dove andremo a sommare i 5 numeri dell'utente.
// Iniziamo il ciclo 
let = i = 0; // Flag che serve per far continuare a contare il programma

while (i < 5) { // Finchè i non arriva a fare 5 giri
    const number = parseInt(prompt('Inserisci un numero.')); // Chiediamo i numeri all'utente
    sum += number; // Aggiungiamo alla somma i numeri che ci da l'utente
    i++;
    console.log(sum);
}
console.log(sum)