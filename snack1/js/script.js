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
        'peso': 7.8,
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
        'peso': 5.9,
    },
    {
        'nome': 'bici10',
        'peso': 9,
    },
];

//creo la variabile che conterrà il peso minore
let pesoMinore = biciclette[0].peso;

//creo la variabile con il nome della bici che sarà quella più leggera
let biciPiuLeggera = biciclette[0].nome;

//creo i ciclo per iterare su tutti gli oggetti
for (let i = 1; i < biciclette.length; i++){
    //creo variabile che contiene i singoli pesi
    let peso = biciclette[i].peso;
    //confronto gli altri pesi al peso iniziale
    if (peso < pesoMinore) {
        pesoMinore = peso;
        biciPiuLeggera = biciclette[i];
    }
    //stampo il meso minore
    console.log(biciPiuLeggera, pesoMinore);
} 



let risultato = document.getElementById('peso_minore');
risultato.innerHTML = "La bici più leggera è la " + biciPiuLeggera.nome + " che pesa: kg: " + pesoMinore;

