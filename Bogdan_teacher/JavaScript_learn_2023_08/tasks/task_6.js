'use strict'


//? Задача №6
/* Преобразуйте строку в число!
Нужна функция, которая может преобразовать строку в число */

const stringToNumber = str => {

    const num = parseFloat(str)

    if (typeof str !== 'string' || isNaN(num)) {
        console.log('Введите текстовое число!')

    } else {
        console.log(typeof num, num)
    }
}

stringToNumber('1234')
stringToNumber('565')
stringToNumber('1')
stringToNumber('0')
stringToNumber(777)
stringToNumber('test')
stringToNumber(undefined)
stringToNumber(NaN)
stringToNumber('2.45')