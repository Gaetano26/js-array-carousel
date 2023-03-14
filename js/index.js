/*
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/


// array delle immagini da inserire
const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];
// creo una costante slider prendendo il div con classe slider
const slider = document.querySelector('.slider')

//creo variabile per prendere l'indice array utilizzato
let currentIndex = 0;

// creo variabile slider vuota in cui inserire il contenuto con le immagini
let slides = '';

// creo un ciclo for in cui inserisco un elemento slide + (immagini array) all'interno della variabile slides
for (let i = 0; i < images.length; i++) {
      slides += `
       <div class="slide">
           <img src="./img/${images[i]}" alt="eroi-${i}">
       </div>
    `;
}

//inserisco e rendo visibile la prima immagine
slider.innerHTML += slides;
document.querySelectorAll('.slide')[currentIndex].classList.add('active');

//creo costanti per prendere i 2 bottoni
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//evento al click bottone next
next.addEventListener('click', goNext);

//funzione per far scorrere le immagini al click del bottone next + ciclo infinito
function goNext() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    if (currentIndex === images.length -1) {
        currentIndex = 0;
    }else {
        currentIndex++;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active')
}


//evento al click bottone prev
prev.addEventListener('click', goPrev);

//funzione per far scorrere le immagini al click del bottone prev + ciclo infinito
function goPrev() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    if (currentIndex === 0) {
        currentIndex = images.length -1;
    }else {
        currentIndex--;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active')
}





