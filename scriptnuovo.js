// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// ----------
// BONUS (a grande richiesta... 🙌 , in questo caso quindi create una terza cartella sempre nella stessa repo che chimate "bonus"):
// JSnack 2
// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga;
// JSnack 5
// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’arra
// 


//creo lista invitati a una festa tramite js 

const invitati = ['Dybala','Ronaldo','Eugenio','Elisa','Costa'
];

//chiedo tramite un prompt l email per sapere se e nella lista degli invitati

const emailVerifica = prompt('inserisci email per verifica la presenza');
let accesso = 'non trovato'
// controllo 
for (let i=0 ; i < invitati.length ; i++){
if (emailVerifica === invitati[i]){
    accesso = 'accesso consentito'
}else{
    accesso
}
}
console.log(accesso)



//trovare numero maggiore in un array 
const numeri = [3, 10, 6, 25, 8, 1];

let max = numeri[0]

for (let i = 0; i < numeri.length ; i++){
    if(numeri[i] > max){
        max = numeri[i]
    }

}
console.log(max)

//Chiedi con un prompt un nome e:
// se la persona esiste nell’array
// controlla anche l’età:
// se ha 18 anni o più → "accesso consentito"
// se ha meno di 18 → "accesso negato (minorenne)"
// se non esiste proprio → "utente non trovato"

const utenti = [
  { nome: "Anna", eta: 17 },
  { nome: "Luca", eta: 22 },
  { nome: "Marco", eta: 16 },
  { nome: "Elisa", eta: 19 },
  { nome: "Giulia", eta: 15 }
];

//chiedi nome alla persona che accede al sito 
const nomeee = prompt('quale e il tuo nome?');


//metto variabile di stato per messaggio che devecncambiare 
let accessoutente = 'utente non trovato';

for (let i=0 ; i < utenti.length ;i++ ){
    if(nomeee === utenti[i].nome ){

       if(utenti[i].eta >= 18){
        accessoutente = 'accesso trovato' 

    }
    else {
        accessoutente = ' accesso non trovato'
    }
    }
   
};


 //Chiedi con prompt il nome di un prodotto e:
//  Se il prodotto esiste:
// se il prezzo è minore o uguale a 2€ → "economico"
// se il prezzo è maggiore di 2€ → "costoso

const prodotti = [
  { nome: "latte", prezzo: 1.2 },
  { nome: "pane", prezzo: 2.5 },
  { nome: "pasta", prezzo: 1.8 },
  { nome: "pizza", prezzo: 5.0 },
  { nome: "acqua", prezzo: 0.8 }
];

const prodotto = prompt('nome prodotto')
let messaggioprodotto = 'prodotto non trovato'
for (let i = 0 ; i < prodotti.length ; i++){
    if(prodotto === prodotti[i].nome){
        if (prodotti[i].prezzo <= 2){
        messaggioprodotto = 'il prodotto e economico'
        }
        else{
            messaggioprodotto = 'il prodotto e costoso'
        }
    }
}
console.log(messaggioprodotto)