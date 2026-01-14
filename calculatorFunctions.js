let firstNumber
let secondNumber
let mathStep = 0
let operation

let result = 0

let numArray1 = []
let numArray2 = []

const displayEl = document.getElementById('display')

function getNumber(num){
    if(mathStep === 0 || mathStep === 1){
        numArray1.push(num)
        mathStep = 1
        firstNumber = Number(numArray1.join(''))
        displayEl.value = firstNumber
    } else if (mathStep === 2){
        numArray2.push(num)
        secondNumber = Number(numArray2.join(''))
        displayEl.value = secondNumber
    }
}

function doMath(operator){
    mathStep = 2
    operation = operator
    }

function allClear(){
    displayEl.value = null
    firstNumber = null
    secondNumber = null
    mathStep = 0
    operation = null
    result = 0
    numArray1 = []
    numArray2 = []
}

function deleteNumber(){
   if(typeof secondNumber !== 'number' && typeof firstNumber === 'number'){
    displayEl.value = null
    firstNumber = null
    numArray1 = []
   }
   
   if (typeof secondNumber === 'number'){
    displayEl.value = null
    secondNumber = null
    numArray2 = []
   }
}

function doEqual(){
    if(operation === '+'){
        result = firstNumber + secondNumber
        displayEl.value = result
    } else if (operation === '-'){
        result = firstNumber - secondNumber
        displayEl.value = result
    } else if (operation === '*'){
        result = firstNumber * secondNumber
        displayEl.value = result
    }else if (operation === '/'){
        result = firstNumber / secondNumber
        displayEl.value = result
    } 
}

function doDecimate() {
    if (typeof result === 'number') {
        result = result * 0.1
        displayEl.value = result
    }

    if (typeof secondNumber !== 'number' && typeof firstNumber === 'number') {
        firstNumber = firstNumber * 0.1
        displayEl.value = firstNumber
    }

    if (typeof secondNumber === 'number') {
        secondNumber = secondNumber * 0.1
        displayEl.value = secondNumber
    }
}

