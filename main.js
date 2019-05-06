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

// creo variabile di conteggio
var counter = 0;

//array che conterrà il nuovo testo
var censuredText = [];

//controllo testo e applico censura
function checkWords(badwords, fulltext) {
  for (var i = 0; i < fulltext.length; i++){
    if (badwords.includes(fulltext[i])) {
      censuredText.push("<strong>xxx</strong>");
      counter++;
    } else {
      censuredText.push(fulltext[i]);
    }
  }
}


checkWords(censuraArray, textArray);
console.log(counter);

//stampa testo censuratore
document.writeln("Il testo censurato è: </br>" + censuredText.join(' '));

//stampa badword index
var index = "La percentuale di parole censurate è del " + ((counter / textArray.length) * 100).toFixed(2) + "%";
document.writeln("</br>Hai censurato " + counter + " parole su " + textArray.length);
document.writeln("</br>" + index);
