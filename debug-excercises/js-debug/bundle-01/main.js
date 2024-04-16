/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// DEBUG: l'indice incrementale deve essere minore di 5 altrimenti il ciclo for non partirà

for (let i = 0; i < 5; i++) {
    // console.log(i);
}


// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

//DEBUG: un solo uguale è un operatore di assegnamento, 3 uguali mettono a confronto il  tipo di dato e il valore
//il compito della funzione è quello di verificare se il numero preso in esame è pari e ritornarlo maggiorati di 5

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// DEBUG: c'è un errore di sintassi, l'inizializzazione, la condizione e l'indice incrementale sono divisi dalla virgola e non dal punto e virgola

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


// Lo scopo della funzione è estrapolare da un array solo i numeri pari ed inserirli in un nuovo array

// DEBUG: 
// 1. primo errore segnalato in console errore di sintassi, il punto e virgola dopo l'indice incrementale nel ciclo for
// 2. secondo errore segnalato in console operatore di assegnazione = invece di triplice ===
// 3. errore di sintassi dopo la condizione dell'if c'è un punto e virgola che non andrebbe messo
// 4. manca il parametro nella funzione
// 5. il -1 nel ciclo for non serve in quanto non leggerebbe l'ultimo elemento dell'array
// 6. nella condizione essendo un array l'indice va inserito tra parentesi quadre e non tonde
// 7. l'array numbers andrebbe messo fuori dalla funzione o inseriti al richiamo della stessa altrimenti lo scopo della funzione, essere generica, non sarebbe rispettata
// 8. il nome della funzione non è esplicativa di quale sarà il suo ruolo

function findEvenNumbers(numbers) {
    let evenNumbers = [];
    console.log(evenNumbers);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log(evenNumbers);
}

findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]); // dovrebbe restituire [2,4,6,8]
