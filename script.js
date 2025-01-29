// Éléments du DOM
const CALCULATOR_SCREEN = document.querySelector('.calculator-screen');
const BUTTONS = document.querySelectorAll('button');
const INPUTS = document.querySelectorAll('input[type="button"]');
const PLUS_SIGN = document.getElementById('plus');
const EGAL_SIGN = document.getElementById('egal');
const CLEAR_SIGN = document.getElementById('clear');

let firstNumber = '';
let currentOperator = '';
let secondNumber = '';

// Fonction exécutée lors du clic sur un chiffre
function whenNumberClicked(event) {
    const value = event.target.value;
    if (!currentOperator) {
        firstNumber += value;
        CALCULATOR_SCREEN.value = firstNumber;
    } else {
        secondNumber += value;
        CALCULATOR_SCREEN.value = `${firstNumber} ${currentOperator} ${secondNumber}`;
    }
}

// Fonction exécutée lors du clic sur un opérateur
function whenOperatorClicked(event) {
    currentOperator = event.target.value;
    CALCULATOR_SCREEN.value = `${firstNumber} ${currentOperator}`;
}

let result = 0;
// Fonction pour calculer une addition
function calculate() {
    if (firstNumber && secondNumber && currentOperator) {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
      
        switch(currentOperator) {
            case '+':
                result = num1 + num2;
                break;
            // Ajoutez d'autres opérations si nécessaire
        }
        
        CALCULATOR_SCREEN.value = result;
        
        // Réinitialiser pour le prochain calcul
        firstNumber = result.toString();
        secondNumber = '';
        currentOperator = '';
    }
}

// Fonction pour effacer
function clearAll() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    CALCULATOR_SCREEN.value = '0';
}

// Ajout des écouteurs d'événements
INPUTS.forEach(input => {
    input.addEventListener('click', whenNumberClicked);
});

PLUS_SIGN.addEventListener('click', whenOperatorClicked);
EGAL_SIGN.addEventListener('click', calculate);
CLEAR_SIGN.addEventListener('click', clearAll);