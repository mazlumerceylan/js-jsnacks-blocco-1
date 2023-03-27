let numeri = [];

for (let i = 0; i < 6; i++) {
  let numero = parseInt(prompt("Inserisci un numero: "));
  if (numero % 2 !== 0) {
    numeri.push(numero);
  }
}

console.log("Numeri dispari inseriti nell'array:", numeri);
