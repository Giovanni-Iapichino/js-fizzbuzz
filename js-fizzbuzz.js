// Scrivi un programma che stampi i numeri da 1 a 100,
// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare
// che possiamo usare?

// STAMPO UN PROGRAMMA CHE CONTA I NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
  // PER I MULTIPLI DI 3 E 5 STAMPO "FIZZBUZZ" AL POSTO DEL NUMERO
  if (i % 15 == 0) {
    console.log("FizzBuzz");
    // PER I MULTIPLI DI 3 STAMPO "FIZZ" AL POSTO DEL NUMERO
  } else if (i % 3 == 0) {
    console.log("Fizz");
    // PER I MULTIPLI DI 5 STAMPO "BUZZ" AL POSTO DEL NUMERO
  } else if (i % 5 == 0) {
    console.log("Buzz");
    // PER I NUMERI CHE NON SONO NE MULTIPLI DI 3 NE MULTIPLI DI 5 STAMPO IL LORO REALE VALORE
  } else {
    console.log(i);
  }
}
