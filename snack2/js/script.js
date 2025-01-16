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

//ciclo per iterare i singoli oggetti
for (let i = 0; i < squadre.length; i++){
    
    //creo la variabile per le singole squadre
    let squadra = squadre[i];

    ///genero un numero random per i punti
    let punti = Math.floor((Math.random()) * 5) + 1;
    
    squadra['punti fatti'] = punti;

    //genero un numero random per i falli subiti
    let falliSubiti = Math.floor((Math.random()) * 9) + 1;    

    //associo il valore (il numero random) alla chiave 'falli subiti'
    squadra['falli subiti'] = falliSubiti;

    //creo variabile per i singoli nomi delle squadre
    nomi = squadre[i].nome;
    console.log(nomi);
} 

console.table(squadre);
