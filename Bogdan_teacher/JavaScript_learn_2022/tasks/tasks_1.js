'use strict'
//Завершите решение так, чтобы оно перевернуло переданную в него строку.
function solution(str) {
    const strReverse = str.split('').reverse().join('')
    return strReverse
}

const strReverse = solution('world')
console.log(strReverse)