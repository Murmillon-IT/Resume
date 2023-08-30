'use strict'

// Нам нужна функция, которая может преобразовать строку в число
const stringToNumber = function (str) {
    // put your code here
    console.log(typeof str)
    const strNumber = Number(str)

    console.log(typeof strNumber)

    return strNumber;
}

stringToNumber('1234')