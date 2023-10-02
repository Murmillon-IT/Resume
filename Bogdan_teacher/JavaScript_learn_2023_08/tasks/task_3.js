'use strict'


//? Задача №3
/* Сумма чисел:
Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму. */

const sumNumbers = (a, b) => {
    //Проверка типов данных
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error()
    }
    //Вычисление и возврат результата
    return a + b
}

try {
    const result = sumNumbers(2, 7)
    console.log(result)
} catch (error) {
    console.log(error.message)
    console.log('Ошибка! Введены неверные данные!')
}