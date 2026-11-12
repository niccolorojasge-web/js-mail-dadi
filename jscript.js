

//Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
//scrivo array invitati
const invitati = ["kostic" , "dybala" ,  "Ronaldo"];

//promt che chiede il login
const accessoUtente = prompt("scrivi la tua email se sei verificato");

//qua  metto un let di accesso negato che puo cambiare in caso la email coincide con gli utenti che hanno fatto il login
let messaggio = 'accesso negato'

//ciclo array con for per vedere se fa parte degli invitati
for (let i=0 ; i < invitati.length ; i++){
    //condizione messaggio 
    if(invitati[i] === accessoUtente){
        messaggio = "accesso approvato" 
    }
}
console.log(messaggio, invitati , accessoUtente)




// gioco dei dadi digitare numero te e pc chi ha il numero piu lungo vince randomico //


//generare numero pc 
const numeroPc = Math.floor(Math.random() * 6) +1
//generare numero utente 
const numeroUtente = Math.floor(Math.random() * 6) +1
// confrontare numero 
if (numeroPc > numeroUtente){
    console.log("numero pc ha vinto " , numeroPc)
}
else if (numeroUtente > numeroPc) {
 console.log ('il numero del utente e maggiore ' , ' ' , numeroUtente )
}
else{
    console.log('pareggio')
}

// BONUS (a grande richiesta... , in questo caso quindi create una terza cartella sempre nella stessa repo che chimate "bonus"):
// JSnack 2
// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga;
// JSnack 5
// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array
const parolaprima = document.getElementById('esempio1');
const parolaseconda = document.getElementById('esempio2')
const parola1 = prompt('inserisci una parola');
const parola2 = prompt('inserisci una parola');

if(parola1.length > parola2.length){
    console.log(parola2,parola1 );
    parolaseconda.innerText =parola2
    parolaprima.innerText = parola1; 
}
else{
    console.log(parola1,parola2)
    parolaprima.innerText = parola1;
    parolaseconda.innerText =parola2 
}

// JSnack 5
// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array
const arrayVuoto = [];
for (let i =0; i < 6 ; i++){
    const number3 =parseInt(prompt('inserisci un numero'))
    if(number3 % 2 !== 0 ){
     arrayVuoto.push(number3);}
}









