'use strict'
function sum(a, b) {  // функция сложения А и В
    return a + b
}

function subtr(a, b) { // функция вычетания А минус В
    return a - b
}


function division(a, b) { // функция деления А на В
    return a / b
}


function multipl(a, b) { // функция умножения А на В
    return a * b
}
/**
 * Функция получает два числа и осущ.мат.операцию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} opetarion при том мб только + - / * 
 * @returns {number}
 * @throws {Error} если передана неопределенная  операция, то вылетит ошибка
 */
function mathOperation(arg1, arg2, opetarion) {
    switch (opetarion) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return subtr(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multipl(arg1, arg2);
        default:
            throw new Error(`Данная операция ${opetarion} не определена`)
    }
}

console.log(mathOperation(1, 2, "+"));
console.log(mathOperation(1, 2, "-"));
console.log(mathOperation(1, 2, "/"));
console.log(mathOperation(1, 2, "*"));
console.log(mathOperation(1, 2, "wowowow"));
