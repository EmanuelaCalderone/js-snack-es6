/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
 */

//creo l'array di oggetti (10)
const biciclette = [
    {
        'nome': 'bici1',
        'peso': 6,
    },
    {
        'nome': 'bici2',
        'peso': 7,
    },
    {
        'nome': 'bici3',
        'peso': 8,
    },
    {
        'nome': 'bici4',
        'peso': 6.5,
    },
    {
        'nome': 'bici5',
        'peso': 7.5,
    },
    {
        'nome': 'bici6',
        'peso': 5.9,
    },
    {
        'nome': 'bici7',
        'peso': 7.4,
    },
    {
        'nome': 'bici8',
        'peso': 6.1,
    },
    {
        'nome': 'bici9',
        'peso': 9,
    },
    {
        'nome': 'bici10',
        'peso': 8,
    },
];

//creo ciclo che itera su tutti gli oggetti e stampo quella più leggera;
let pesi = [];
for (let i = 0; i < biciclette.length; i++){
    let peso = biciclette[i].peso;
    pesi.push(peso);
} console.log(pesi);

let piuLeggera = Math.min(...pesi);
console.log(piuLeggera);