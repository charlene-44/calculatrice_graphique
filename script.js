// Éléments du DOM
const CALCULATOR_SCREEN = document.querySelector('output')
const BUTTONS = document.querySelectorAll('button')
const INPUTS = document.querySelectorAll('input')
const PLUS_SIGN = document.getElementById('plus')
const EGAL_SIGN = document.getElementById('egal')

// Fonction exécutée lors du clic sur un bouton
function whenButtonIsClicked (event) {
    CALCULATOR_SCREEN.innerText += event.target.value
}

// Ajoute un eventListener à chaque bouton
BUTTONS.forEach(button => {
    button.addEventListener('click', whenButtonIsClicked)
});

// Ajoute un eventListener à chaque input
INPUTS.forEach(input => {
    input.addEventListener("click", whenButtonIsClicked)
})

let sum = 0
//Fonction pour calculer une addition
function addition() {
    sum = 0; // Réinitialiser sum à chaque calcul
    INPUTS.forEach(input => {
        sum += Number(input.value); // Convertir en nombre
    });
    CALCULATOR_SCREEN.innerText = sum; // Afficher la somme
}

EGAL_SIGN.addEventListener('click', addition);