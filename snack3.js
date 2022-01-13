console.log('JS OK');

/* Traccia:
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const fakeNames = []; // Abbiamo bisogno di un array vuoto dove andare ad aggiungere 
const names = ['Antonio', 'Nicolas', 'Matteo'];
console.log(names);
const surnames = ['Ferrari', 'Disney', 'Lamborgini'];
console.log(surnames);

// finchè la lunghezza degli elementi di questo array non è 3

while (fakeNames.length < 3) {
    const randomNum1 = Math.floor(Math.random() * names.length); // Cerchiamo tra i nomi dell'array un nome casuale
    const randomNum2 = Math.floor(Math.random() * surnames.length); // Cerchiamo tra i nomi dell'array un cognome casuale

    const name = names[randomNum1]; // Variabile per ottenere un nome 
    console.log(name);
    const surname = surnames[randomNum2];// Variabile per ottenere un cognome
    console.log(surname);
    const fakePerson = `${name}  ${surname}`; // Uniamo le due variabili di dopra per ottenere un nome e un cognome

    fakeNames.push(fakePerson); // aumento gli elementi dell'array fakeNames affichè non si cada in un loop infinito.
}

console.log(fakeNames);