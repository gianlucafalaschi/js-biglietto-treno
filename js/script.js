/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
     per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// RACCOLTA DATI UTENTE
 //chiedere chilometri

const userKm = parseInt (prompt("Dimmi i chilometri"));
 console.log(userKm);
// chiedere eta'
const userAge = parseInt (prompt("Dimmi la tua eta'"));
 console.log(userAge);
//CALCOLARE
//calcolare prezzo biglietto in base ai km
const priceTicket = parseFloat(`${userKm * 0.21}`);
console.log(priceTicket);

//SCONTO
//calcolare sconto 20% se minorenni oppure
//calcolare sconto 40% se over65
let discount;

if (userAge < 18) {
    discount = priceTicket * 20 / 100;
}else if (userAge > 65) {
    discount = priceTicket * 40 / 100;
}else {
    discount = 0;
}
console.log(discount);


//STAMPARE
//stampare la cifra scontata

let finalPrice = `Il costo del tuo biglietto e' di: ${priceTicket - discount} €`;
console.log(finalPrice);


document.getElementById("message").innerHTML = finalPrice;
