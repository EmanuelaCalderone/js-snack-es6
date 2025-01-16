/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


//creo l'array con gli oggetti selle squadre
const squadre = [
    {
        'nome': 'Palermo',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome': 'Juventus',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome': 'Milan',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome': 'Lazio',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome': 'Sampdoria',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome': 'Napoli',
        'punti fatti': 0,
        'falli subiti': 0,
    },
];


//funzione per il numero casuale
function numeroRandom(min,max) {
    let numeriRandom = (Math.floor(Math.random() * (max - min + 1)) + min);
    return numeriRandom;
}

//creo il nuovo array solo con i nomi e i falli subiti
let nomi_falli = [];

//ciclo per iterare i singoli oggetti
for (let i = 0; i < squadre.length; i++) {
    
    //creo la variabile per le singole squadre
    let squadra = squadre[i];

    ///genero un numero random per i punti
    let punti = numeroRandom(1, 5);
    
    //associo il valore (il numero random) alla chiave 'punti'
    squadra['punti fatti'] = punti;

    //creo variabile per i singoli nomi delle squadre
    let nomi = squadre[i].nome;
    
    //genero un numero random per i falli subiti
    let falliSubiti = numeroRandom(1, 10);

    //associo il valore (il numero random) alla chiave 'falli subiti'
    squadra['falli subiti'] = falliSubiti;

     //pusho i nomi e i falli subiti nel nuovo array
     nomi_falli.push({
        'nome': squadra.nome,
        'falli subiti': squadra['falli subiti'],
    });
};

//stampo tutti i dati
console.table(squadre);

//stampo il nuovo array
console.table(nomi_falli);

