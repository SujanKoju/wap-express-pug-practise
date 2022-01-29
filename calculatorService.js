function getResult(req) {
    let firstNumber = parseInt(req.body.firstNumber);
    let secondNumber = parseInt(req.body.secondNumber);
    let operation = req.body.selectedOperation;

    let result = 0;
    if (operation === 'add') result = firstNumber + secondNumber;
    if (operation === 'subtract') result = firstNumber - secondNumber;
    if (operation === 'multiply') result = firstNumber * secondNumber;
    if (operation === 'divide') result = firstNumber / secondNumber;
    return result;
}

exports.getResult = getResult;
