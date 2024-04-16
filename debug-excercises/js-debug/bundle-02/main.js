/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// DEBUG: la variabile message non può essere const in quanto verrà successivamente riutilizzata per stampare il messaggio. Dovrà quindi essere let.
// Sarebbe poi più corretto inserire un paramentro all'interno della funzione e rimuovere le due variabili inserendo poi l'età dell'utente direttamente quando si richiama la funzione

// La funzione si occupa di verificare se l'utente è maggiorenne o minorenne

function checkAge(myAge) {
    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(message);
}
checkAge(16);


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// DEBUG: length è scritto male 
// La funzione si occupa di stampare il numero di colori che contiene la palette


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// DEBUG: aggiungo parseInt a userNumber per far si che nella variabile total i due numeri vengano sommati e non concatenati
// Anche in questo caso sarebbe più corretto inserire un parametro della funzione
// La funzione somma il numero fornito dall'utente a 12

function addNumbers(numberToAdd) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + numberToAdd;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers(12);


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// DEBUG: 
// 1. nella variabile flag false è tra apici ed è quindi una stringa quando in realtà dovrebbe essere un booleano
// 2. è stato messo un if di troppo, nel primo if è già specificiato che grantAccess = true
// La funzione si occupa di verificare se l'email inserita dall'utente è tra quelle autorizzate per l'accesso

function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
        console.log('Accesso consentito!'); 
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();



// ESERCIZIO 5 (suggerimento: c'è un solo errore)

// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();

// DEBUG: 
// 1. va aggiunta la parentesi graffa alla fine per chiudere la funzione
// 2. la condizione è meglio metterla fuori dal ciclo for per non stampare il messaggio in console più volte

function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (userEmail.length > 5) {
        for (let i = 0; i < addresses.length; i++) {
            const email = addresses[i];
            if (email === userEmail) {
                grantAccess = true;
            }
        }
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}

checkAccessImproved();
