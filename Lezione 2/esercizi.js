/*Cerca di usare il più possibile la sintassi ES6
Il file esercizi è già inserito nella pagina index.html quindi per i 
risultati esegui quella pagina con live server(estensione di visual studio)
e guarda nella console.

TUTTI I DATI DEVONO ESSERE PARAMETRI DELLE FUNZIONI CHE CREERAI
*/

/*
1)
Dato un array di stringhe  
var myArray = ["uno", "due", "ventisette", "sei", "cinque"]
estrai un array contenente le stringhe con più di cinque caratteri
*/
//const myArray = ["unoaaaaaaa", "due", "ventisette", "sei", "cinque"];
//function moreThanFive() {}
//FILTER RITORNA SEMPRE UN ARRAY COMPOSTO DAGLI ELEMENTI
//CHE SUPERANO LA NOSTRA CONDIZIONE
//OSSIA CHE IL RISULTATO DELLA FUNZIONE è TRUE
/* const moreThanFive = params => params.filter(current => current.length > 5);
console.log(moreThanFive(myArray)); */
/*

Dato un array di oggetti
 const ragazzi = 
[
{ nome: "giovanni", "cognome": "rossi", age=25  },
{ nome: "alberto", "cognome": "verdi", age=16  },
{ nome: "francesco", "cognome": "bianchi", age=22 },
{ nome: "maria", "cognome": "rossi", age=18  }
]
1)//Mappare l'array originale modificando per ogni elemento solo il campo age
2) Estrarre il più grande

crea una funzione che restituisca un array di oggetti con il campo age raddoppiato,
solo dopo estrai dall'array il ragazzo (oggetto) più grande di età(age)
//che si chiama francesco 
=> Suggerimento (utilizza la funzione find() vedi MDN)
*/
const ragazzi = [
  { nome: "giovanni", cognome: "rossi", age: 25 },
  { nome: "alberto", cognome: "verdi", age: 16 },
  { nome: "francesco", cognome: "bianchi", age: 22 },
  { nome: "fTY", cognome: "bianchi", age: 55 },
  { nome: "maria", cognome: "rossi", age: 18 }
];

/*
RITORNA UN ARRAY COMPOSTO DA 1 OGGETTO CHE SODDISFA LA CONDIZIONE 
ragazzi.filter(current => current.nome === "francesco" )
*/
//SOLUZIONE CON REDUCE

//Map crea un array
//REDUCE RIDUCE UN ARRAY AD UN SINGOLO ELEMENTO/VALORE
/* const doubleAndOlder = myObj =>
  myObj
    .map(current => {
      current.age = current.age * 2;
      return current;
    })
    .reduce((prev, current) => (prev.age > current.age ? prev : current), 0);

console.log(doubleAndOlder(ragazzi));

var myNumberArray = [1, 2, 3, 4, 5];
var somma = myNumberArray.reduce((prev, current) => prev + current, 0);
 */
/* Come funziona reduce?
Applica una funzione su ogni elemento dell'array.
Prev.age vale 0 all'inizio
1) prev.age (0) > current.age(50) NO allora ritorna current(tutto l'oggetto) che diventa prev
Prev.age ora vale 50
2)prev.age(50) > current.age(32) SI allora ritorna prev che già vale 50
Prev.age vale ancora 50
3)prev.age(50) > current.age(44) SI allora ritorna prev che già vale 50
ec...
alla fine "vince" l'array viene ridotto ad un solo elemento che è prev
*/

//SOLUZIONE CON FIND
const doubleAndOlder = myObj =>
  myObj
    .map(current => {
      current.age = current.age * 2;
      return current;
    })
    //FIND ESTRAE DALL'ARRAY L'ELEMENTO
    //( IN QUESTO CASO UN OGGETTO) CHE SODDISFA LA CONDIZIONE (RITORNA TRUE)
    //INOLTRE PRENDE SOLO IL PRIMO
    .find(current => current.nome === "francesco");

console.log(doubleAndOlder(ragazzi));
console.log(ragazzi.filter(current => current.nome === "francesco"));

//SE DEVO CONTROLLARE IL RISULTATO DI UN FILTER
//DEVO CONTROLLARE AVENDO var filtered = myArray.filter(ecc..)
//SE filtered.legth > 0 per vedere se ho trovato qualcosa

//SE DEVO CONTROLLARE IL RISULTATO DI UN FIND
//CONTROLLO SE è UNDEFINED var trovato = myArray.find(ecc..)
// IF trovato !== undefined allora

/*3) Crea una funzione che presa come input una stringa ritorna la stringa inversa
SUGGERIMENTO: Cerca su MDN la funzione reverse()
*/
