
/***
 * Completare il corpo della funzione acc in modo che il valore
 * da essa restituito sia la media dei numeri contenuti nell'array
*/

function average(numbersArray) {
     let somma = 0;
    let media = 0;
        for (let i = 0; i < numbersArray.length; i++) {
        somma += numbersArray[i];
        media = somma / numbersArray.length;
} return media;
}

const x = average([3, 5, 10]);
console.log(x); // deve stampare il numero 6
