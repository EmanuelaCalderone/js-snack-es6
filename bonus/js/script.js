/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

//creo la funzione con tre parametri in ingresso (array iniziale e due numeri)
function middle(numeri, num1, num2) {

    //inizializzo un secondo array vuoto
    let numeriMiddle = [];

    //itero tutti i numeri del primo array finché il numero successivo non sarà minore del secondo numero
    for (let i = 0; i < num2; i++){

        //creo una variabile che conterrà i valori successivi incrementandoli di uno a ogni iterazione
        let nextNum = ++num1;
        if (nextNum < num2) {
            //pusho tutti quei numeri nel secondo array
            numeriMiddle.push(nextNum);
        };
    } //ritorno il secondo array
    return numeriMiddle;
} 

//test 

//creo array vuoto
let numeri = [];
//stampo e chiamo la funzione
console.log(middle(numeri, 2, 10));
