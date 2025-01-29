// Éléments du DOM
const CALCULATOR_SCREEN = document.querySelector('output')
const BUTTONS = document.querySelectorAll('button')
const INPUTS = document.querySelectorAll('input')
const PLUS_SIGN = document.getElementById('plus')
const EGAL_SIGN = document.getElementById('egal')
const CLEAR_SIGN = document.getElementById('clear')

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

// let sum = 0

//Fonction pour calculer une addition
function addition() {
    let sum = 0; // Initialiser la variable sum à zéro
    INPUTS.forEach(input => {
        let value = input.value;
        if (value !== '') { // Vérifier que le champ de saisie n'est pas vide
            let number = parseFloat(value); // Utiliser parseFloat pour convertir la valeur en nombre
            if (!isNaN(number)) { // Vérifier que la conversion a réussi
                sum += number; // Ajouter le nombre à sum
            }
        }
    });
    CALCULATOR_SCREEN.innerText = sum; // Afficher la somme
}

EGAL_SIGN.addEventListener('click', addition);


EGAL_SIGN.addEventListener('click', addition);


EGAL_SIGN.addEventListener('click', addition);

function clearAll () {
    CALCULATOR_SCREEN.innerText = "0"
}

CLEAR_SIGN.addEventListener('click', clearAll)

