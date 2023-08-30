'use strict'

// Численное преобразование
const a12 = '6' / '2'  // string
console.log(a12)  // 3

console.log(typeof (a12))  // number

// ещё пример:
const str = "123";
console.log(typeof str); // string

const num = Number(str); // становится числом 123

console.log(typeof num); // number


// Строковое преобразование
const q13 = true
console.log(typeof q13)  // boolean

const q14 = String(q13)
console.log(typeof q14)  // string


// Логическое преобразование
const r12 = 1
console.log(typeof r12)  // number

const r13 = Boolean(r12)
console.log(typeof r13)  // boolean
console.log(r13)  // true


// Кстати
console.log(null == undefined)  //true
console.log(null === undefined)  //false