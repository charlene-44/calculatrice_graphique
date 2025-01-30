// Éléments du DOM
const CALCULATOR_SCREEN = document.querySelector('.calculator-screen');
const BUTTONS = document.querySelectorAll('button');
const INPUTS = document.querySelectorAll('input[type="button"]');
const PLUS_SIGN = document.getElementById('plus');
const EGAL_SIGN = document.getElementById('egal');
const CLEAR_SIGN = document.getElementById('clear');
const MINUS_SIGN = document.getElementById('minus');
const TIMES_SIGN = document.getElementById('times')
const DIVIDE_SIGN = document.getElementById('divide')

let firstNumber = '';
let currentOperator = '';
let nextOperator = '';
let secondNumber = '';
let thirdNumber = '';

// Fonction exécutée lors du clic sur un chiffre
function whenNumberClicked(event) {
    const value = event.target.value;

    if (!currentOperator) {
        firstNumber += value;
        CALCULATOR_SCREEN.value = firstNumber;
    } else if (currentOperator && !secondNumber) {
        secondNumber += value;
        CALCULATOR_SCREEN.value = `${firstNumber} ${currentOperator} ${secondNumber}`;
    } else if (currentOperator && secondNumber && !nextOperator) {
        thirdNumber += value;
        CALCULATOR_SCREEN.value = `${firstNumber} ${currentOperator} ${secondNumber} ${thirdNumber}`;
    } else if (secondNumber && nextOperator) {
        thirdNumber += value;
        CALCULATOR_SCREEN.value = `${firstNumber} ${currentOperator} ${secondNumber} ${nextOperator} ${thirdNumber}`;
    }
}

// Fonction exécutée lors du clic sur un opérateur
function whenOperatorClicked(event) {
    if (firstNumber && currentOperator && secondNumber && thirdNumber) {
        calculate();
        nextOperator = event.target.value;
    } else if (firstNumber && currentOperator && secondNumber) {
        nextOperator = event.target.value;
        CALCULATOR_SCREEN.value = `${firstNumber} ${currentOperator} ${secondNumber} ${nextOperator}`;
    } else if (firstNumber) {
        currentOperator = event.target.value;
        CALCULATOR_SCREEN.value = `${firstNumber} ${currentOperator}`;
    }
}

// Fonction exécutée lors du clic sur le bouton égal
function calculate() {
    let result = 0;
    if (firstNumber && secondNumber && currentOperator) {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const num3 = thirdNumber ? parseFloat(thirdNumber) : 0;

        switch (currentOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        if (nextOperator) {
            switch (nextOperator) {
                case '+':
                    result = (num1 * num2) + num3;
                    break;
                case '-':
                    result = (num1 * num2) - num3;
                    break;
                case '/':
                    result = (num1 * num2) / num3;
                    break;
            }
        }

        CALCULATOR_SCREEN.value = result;
        firstNumber = result.toString();
        secondNumber = '';
        thirdNumber = '';
        currentOperator = '';
        nextOperator = '';
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
MINUS_SIGN.addEventListener('click', whenOperatorClicked)
TIMES_SIGN.addEventListener('click', whenOperatorClicked)
DIVIDE_SIGN.addEventListener('click', whenOperatorClicked)
