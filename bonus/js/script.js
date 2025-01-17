/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */


// dichiaro l'array
const saluti = ['ciao', 'buongiorno', 'buonasera', 'salve', 'salute', 'arrivederci'];

// creo la funzione con tre parametri in ingresso (array e due numeri)
function middle(array, min, max) {
    // creo la condizione
    for (let i = ++min; i < array.length; i = i++) {
        //slice per far ritornare una parte dell'array
        return array.slice(min, max);
    };
}

// test
console.log(middle(saluti, 0, 4));

