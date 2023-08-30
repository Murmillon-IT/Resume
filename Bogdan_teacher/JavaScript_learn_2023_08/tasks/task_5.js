'use strict'


//Задача №5
/* Поиск максимума:
Напишите функцию, которая принимает массив чисел и возвращает наибольшее число в массиве. */

const findingMaximumNumber = array => {
    //Проверка на пустой массив
    if (array.length === 0) {
        return undefined
    }
    //Возвращаем максимальное число
    return Math.max(...array)

}

const array = [8, 92, 234, 46, 145]
const maxNumber = findingMaximumNumber(array)

if (maxNumber !== undefined) {
    console.log(`Максимальное число: ${maxNumber}`)
}else {
    console.log(`Массив пустой`)
}