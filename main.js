//creo un file main.js con un semplice console.log che dica hello node js
console.log('hello node js');

//aggiungo allo script una variabile di ambiente chiamata PIN  con associato numero a piacere
const pin = process.env.pin;
console.log(pin);

//passo un argomento al vostro script e recupero il valore usando process e la proprietá argv per stamparlo in console
const newPin = process.argv[2]
console.log(newPin);

/*Bonus:
se il valore dell'argomento é admin ed il valore di PIN definito é 666 allora stampa in console Welcome Admin
altrimenti stampa Access restricted*/
if ((pin == 666) && (newPin == 'admin')) {
    console.log('Welcome admin');
    
}else{
    console.log('Access restricted');
    
}




