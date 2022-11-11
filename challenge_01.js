
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"

/*********  Variante 1 **********/

// //Deklaration
// let ziffer1, ziffer2
// let zahl1, zahl2;
// let summe;

// //Eingabe
// ziffer1 = prompt("Zahl 1:");
// ziffer2 = prompt("Zahl 2:");
// console.log(typeof ziffer1);
// console.log(typeof ziffer2);

// //Typkonvertierung
// zahl1 = parseInt(ziffer1);
// zahl2 = parseInt(ziffer2);
// console.log(typeof zahl1);
// console.log(typeof zahl2);

// //Berechnung
// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********  Variante 2 **********/

// //kompaktere Lösung

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Zahl 1:"));
// zahl2 = parseInt(prompt("Zahl 2: "));
// summe = zahl1 + zahl2
// console.log("Die Summe der Zahlen ist: " + summe);

/*********  Variante 3 **********/

console.log
(
    "Die Summe ist: " +
    (
    parseFloat(prompt("Bitte Zahl 1 eingeben"))
    parseFloat(prompt("Bitte Zahl 2 eingeben"))
    )
);

/*********  Variante 0 **********/

// //Deklaration
// let zahl1, zahl2;
// let summe;

// //Wertzuweisung
// zahl1 = Number(prompt("Bitte eine Zahl eingeben:"));
// zahl2 = Number(prompt("Bitte eine zweite Zahl eingeben:"));

// //Berechnung
// summe = zahl1 + zahl2

// //Ausgabe
// console.log("Die Summe der Zahlen ist: " + summe)
// // function sumation(zahl1,zahl2){
// //     if (typeof zahl1 == Number & typeof zahl2 == Number)
// //     return ("Die Summe der Zahlen ist: " + summe)
// //     else
// //     alert ("Falscher Eingabewert");
// // }

