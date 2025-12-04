

//Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,

const maillutenti = ["utente1", "Niccolo", "kostic"];
let presente = false;

const emailUtente = prompt("Inserisci la tua email per verificare l'accesso:");

for (let i = 0; i < maillutenti.length; i++) {
    if (emailUtente === maillutenti[i]) {
        presente = true;
    }
}

console.log(presente);



// gioco dei dadi digitare numero te e pc chi ha il numero piu lungo vince//

let numeroScelta = parseInt(prompt("digita un numero a tua scelta da 1 a 6"));
const numeroRandom = Math.floor(Math.random() * 6) + 1;
console.log(numeroRandom, numeroScelta)

if (numeroRandom > numeroScelta) {
    console.log("ha vinto il pc");
}
else if (numeroScelta > numeroRandom) {
    console.log("hai vinto");
}
else {
    console.log("pareggio")
}







