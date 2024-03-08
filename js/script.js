/*Consegna:*

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.*/



// definisco delle varibili per inserire contenuto nel mio DOM
const title = document.querySelector('h1');
title.className = 'text-center display-1 fw-bold text-white'


// console.log(title)

const square = document.createElement('div');
// console.log(typeof square); 

square.className = 'd-flex justify-content-between align-content-center flex-wrap gap-3';
square.setAttribute('id', 'bigbox');
// console.dir(square)

let tmpHtml = '';
const box = document.querySelector('.box');
console.log(box)

//qui diciamo al ciclo " for " di immettere in tmpHtml tanti div di classe"box" quanti cicli si ripetono
for (let i = 0; i < 100; i++) {
    const color = (i % 3 === 0) ? 'red' : '';
    tmpHtml += ` <div class="box ${color}">${i + 1}</div>`;



};


square.innerHTML = tmpHtml;
// console.log(square);
const container = document.querySelector('.container');
container.append(square);












