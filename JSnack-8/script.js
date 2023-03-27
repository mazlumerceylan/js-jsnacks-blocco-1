let numero = prompt("Inserisci un numero di 4 cifre:");
let somma = 0;

for(let i = 0; i < numero.length; i++){
  somma += parseInt(numero[i]);
}

console.log("La somma delle cifre di " + numero + " è " + somma);