'use strict'


//? Задача №4
/* Подсчет гласных:
Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней. */

const lettersSumVowel = string => {
    const lettersVowel = 'ауоыиэяюёеАУОЫИЭЯЮЁЕ'
    let count = 0

    for (const char of string) {
        if (lettersVowel.includes(char)) {
            count++
        }
    }
    return count
}

const inputString = 'Арсен'
const vowelCount = lettersSumVowel(inputString)
console.log(`Количество гласных букв: ${vowelCount}`)

