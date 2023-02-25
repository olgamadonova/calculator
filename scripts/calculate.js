const firstOperatorElement = document.querySelector('[data-first-operator]');
const secondOperatorElement = document.querySelector('[data-second-operator]');
const operandElement = document.querySelector('[data-operand]');
const enterElement = document.querySelector('[data-enter]');
const resultElement = document.querySelector('[data-result]');

let result = 0;

const enterElementHandler = () => {
    const operation = operandElement.value;
    const firstNumber = Number(firstOperatorElement.value);
    const secondNumber = Number(secondOperatorElement.value);
//вопрос про области видимости: если объявить переменную result здесь, а не в модульной области видимости, то если я пытаюсь обратиться к ней внутри тела if {} эта переменная считывается как неинициализированная, почему так? ведь она объявлена внутри области видимости функции где я совершаю проверку, при этом внутри тела switch все в порядке, не понимаю почему такое поведение

    if (firstOperatorElement.value === '' || secondOperatorElement.value === '') {
        resultElement.innerText = 'ожидание чисел для совершения операции';
        return;
    }
    switch (operation) {
        case ('plus'):
            result = firstNumber + secondNumber;
            break;
        case('multiply'):
            result = firstNumber * secondNumber;
            break;
        case ('minus'):
            result = firstNumber - secondNumber;
            break;
        case('divide'):
            result = (secondNumber === 0)? 'делить на ноль нельзя': firstNumber/secondNumber;
            break;
        default:
            alert('выберите операцию')
    }

    if (isNaN(result)) {
        resultElement.innerText = result;
        return;
    }
    resultElement.innerText = Number.isInteger(result)
        ? result.toFixed(0)
        : result.toFixed(3);
}

export {
    enterElement,
    result,
    enterElementHandler,
    resultElement
};