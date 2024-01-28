/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

// Stampo la variabile pets.
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// Creo una variabile con slice() per far si che non si modifichi array principale
// e con sort() per ordinarla alfabeticamente.
const alphabeticPets = pets.slice().sort();

console.log(alphabeticPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// Come prima ne creo una copia e poi la inverto con reverse()
const reversePets = pets.slice().reverse();

console.log(reversePets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

//Prendo il primo elemento con shift()
const firstPet = pets.shift();

//faccio una verifica
console.log(firstPet);
console.log(pets);

//inserisco nuovamente l'elemento nell'array, ma questa volta in ultima posizione con il comando push()
pets.push(firstPet);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

//Inserisco nei vari array le proprietà
cars[0].licensePlate = "AB123CD";
cars[1].licensePlate = "EF321GH";
cars[2].licensePlate = "IL132MN";

console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//Creo un nuovo oggetto
const newObj = {
  brand: "Fiat",
  model: "Panda",
  color: "white",
  trims: ["stringhe", "a", "caso"],
  licensePlate: "OP231QR",
};

// inserisco l'oggetto nella variabile cars
cars.push(newObj);

// verifico
console.log(cars);

// rimuovo l'ultimo valore di trims da ogni array

cars.forEach((cars) => {
  cars.trims.pop();
});

// verifico nuovamente
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

const firstTrimFord = cars[0].trims.shift();
const firstTrimPeugeot = cars[1].trims.shift();
const firstTrimVolkswagen = cars[2].trims.shift();
const firstTrimFiat = cars[3].trims.shift();

justTrims.push(firstTrimFord, firstTrimPeugeot, firstTrimVolkswagen, firstTrimFiat);

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color[0].toLowerCase();
  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;

// creo un ciclo while in cui stampo finchè un numero è diverso da 32
while (i < numericArray.length) {
  if (numericArray[i] !== 32) {
    console.log(numericArray[i]);
  } else {
    break;
  }
  i++;
}

//faccio un'ultima stampa per comprendere anche il 32 nella console
console.log(numericArray[i]);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphabetInNumber = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      alphabetInNumber.push(1);
      break;
    case "b":
      alphabetInNumber.push(2);
      break;
    case "c":
      alphabetInNumber.push(3);
      break;
    case "d":
      alphabetInNumber.push(4);
      break;
    case "e":
      alphabetInNumber.push(5);
      break;
    case "f":
      alphabetInNumber.push(6);
      break;
    case "g":
      alphabetInNumber.push(7);
      break;
    case "h":
      alphabetInNumber.push(8);
      break;
    case "i":
      alphabetInNumber.push(9);
      break;
    case "l":
      alphabetInNumber.push(10);
      break;
    case "m":
      alphabetInNumber.push(11);
      break;
    case "n":
      alphabetInNumber.push(12);
      break;
    case "o":
      alphabetInNumber.push(13);
      break;
    case "p":
      alphabetInNumber.push(14);
      break;
    case "q":
      alphabetInNumber.push(15);
      break;
    case "r":
      alphabetInNumber.push(16);
      break;
    case "s":
      alphabetInNumber.push(17);
      break;
    case "t":
      alphabetInNumber.push(18);
      break;
    case "u":
      alphabetInNumber.push(19);
      break;
    case "v":
      alphabetInNumber.push(20);
      break;
    case "z":
      alphabetInNumber.push(21);
      break;
    default:
      alphabetInNumber.push(null);
      break; // Restituisce null se il carattere non è nell'alfabeto italiano
  }
}

console.log(alphabetInNumber);
