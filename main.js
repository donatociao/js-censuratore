// REPO: js-censuratore
// DESCRIZIONE:
// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

//input testo
var text = prompt("Inserisci qui il testo");

//creo un array con le parole del testo
var textArray = text.split(" ");
console.log(textArray);

//input parole da censurare
var censura = prompt("Inserisci 3 parole da censurare separate da uno spazio");
var censuraArray = censura.split(" ");
console.log(censuraArray);

//controllo testo e applico censura

var counter = 0;

function checkWords(array1, array2) {
  for (var i = 0; i < array1.length; i++){
    if (array1[i].includes(array2[0])) {
      counter++;
      array[i] = "xxx";
    } else if (array1[i].includes(array2[1])) {
      counter++;
      array[i] = "xxx";
    } else if (array1[i].includes(array2[2])) {
      counter++;
      array[i] = "xxx";
    }
  }
  return counter;
}

checkWords(textArray, censuraArray);

console.log(counter);


//stampa testo censuratore


//stampa badword index
