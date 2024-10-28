require('dotenv').config();

//creo un file main.js con un semplice console.log che dica hello node js
console.log('hello node js');

//aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666
const pin = process.env.PIN;
console.log(pin);

const newPin = process.argv;
console.log(newPin);




