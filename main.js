/*Creiamo la prima applicazione con NodeJs:
usate il modulo process per recuperare e stampare in console dalla proprietá env la variabile PIN
ora passate un argomento al vostro script e recuperatene il valore usando process e la proprietá argv per stamparlo in console
Bonus:
se il valore dell'argomento é admin ed il valore di PIN definito é 666 allora stampa in console Welcome Admin
altrimenti stampa Access restricted*/

//creo un file main.js con un semplice console.log che dica hello node js
console.log('hello node js');

//aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666
const pin = process.env.PIN;
console.log(process.env.PIN);



