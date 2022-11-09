
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"

/*********  Variante 1 **********/
/*
let zahl1, zahl2;
let summe;

zahl1 = prompt("Zahl 1:");
zahl2 = prompt("Zahl 2:");

summe = zahl1 + zahl2;

console.log("Die Summe der Zahlen ist: " + summe);
*/

//Deklaration
let zahl1, zahl2;

//Wertzuweisung
zahl1 = ("Bitte eine Zahl eingeben:");
zahl2 = ("Bitte eine zweite Zahl eingeben:");

//Berechnung
summe = Number(prompt(zahl1)) + Number(prompt(zahl2))

//Ausgabe
console.log("Die Summe der Zahlen ist: " + summe)
