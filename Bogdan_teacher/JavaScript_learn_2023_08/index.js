'use strict'

// Объект - это набор свойст:
// ИМЯ: ЗНАЧЕНИЕ  (имя также часто называют "ключем")


//Пример объекта:

/* {
visible: true,
colorDepth: 24,
tittle: 'My Image',
orientation: {
    angle: 0,
    type: 'landscape'
    },
    pixelDepth: 24,
    widht: 1440
} */


//Объекты
const objectA = {
    a: 10,
    b: true
}

const copy0fA = objectA  //теперь две переменные ссылаются на один и тот же объект, если поменять какое либо свойство в объекте то оно поменяется во всех переменных т.к. ссылаются на один объект

copy0fA.a = 20 //с помощью оператора "точка" можно получить доступ к свойствам объекта. В данном примере мы меняем свойства объекта через переменную "copy0fA"

console.log(copy0fA.a)
console.log(objectA.a) //свойство объекта поменялось и в этой переменной т.к. ссылаются на один и тот же объект
console.log(copy0fA)

copy0fA.c = 'abc' //добавление нового свойства "c" в объект со значением 'abc'

console.log(copy0fA)
console.log(objectA.c) //добавленное свойтсво "с" появилось и у данного объекта


//Динамичекская типизация
let aa = 20 //присвоили числовое значение
aa = 'cbv' //поменяли числовое значение на строчное
//это и есть динамическая типизация. JS динамически типизируемый язык

//Ещё примеры:
function a() { //это функция, о них поговорим позже
    console.log('Hi')
}

a()

a = 15

console.log(a)
//вызов функции a() вызовет ошибку т.к. её больше не существуетa, её "переписали"
//а чтобы случайно не перезаписать переменную используйте "const"
//Пример:
const a1 = () => { //это стрелочная функция
    console.log('Hello')
}

a1()

//* a1 = 10 //выдаст ошибку т.к. a1 это const


//Изменение, добавление и удаление свойсв объекта
const myCity = {
    city: 'New York'
}

myCity.city = 'Las Vegas' //изменение свойств
console.log(myCity)

myCity.country = 'USA' //добавление свойств
console.log(myCity)

delete myCity.city //удалили свойства объекта

console.log(myCity)


//Изменение, добавление и удаление свойсв объекта с помощью скобочной записи
const myCity2 = {
    city: 'New York'
}

myCity2['popular'] = true //добавление свойсвта "popular" со значением "true"
console.log(myCity2)

const countryPropertyName = 'country'
myCity2[countryPropertyName] = 'USA' //добавление свойсвта "country" со значением "USA" с помощью переменной "countryPropertyName"
console.log(myCity2)


//Вложенные объекты
const myCity3 = {
    city: 'New York',
    info: { //вложенный объект
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity3.info.country)


//Использование переменных при формировании объекта
const name = 'Arsen'
const postsQty = 23

const userProfile = {
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)

//можно также использовать сокращенный формат записи свойств объекта, если имя(ключ) и его значение повторяются, например:
const userProfile2 = {
    name, //сокращенный формат записи (он очень популярен в JS)
    postsQty, //сокращенный формат записи
    hasSignedAgreement: false
}


//Глобальные объекты
//Window - глобальный объект в веб-браузерах
//Global - глобальный объект в Node.js
//globalThis - уникальное наименование глоб. объекта и в веб-браузерах и в Node.js
//к примеру объект console на самом деле вложен в глобальный объект global или window в зависимости в какой среде пишется код
console.log('without global')
global.console.log('with global')
globalThis.console.log('with globalThis')
//в данном примере эти записи выполняют одну и ту же функцию


//Методы. Метод - свойства объекта значение которого функция
const myCity4 = {
    city: 'Tashkent',
    cityGreeting: function () {
        console.log('Greeting!!!') //метод
    }
}

myCity4.cityGreeting() //вызов метода

//Сокращенный способ:
const myCity5 = {
    city: 'Tashkent',
    cityGreeting() { //сокращенная запись
        console.log('Greeting!!!') //метод
    }
}

myCity5.cityGreeting() //вызов метода


//JSON (JavaScript Object Notation) - это формат обмена данными между компьютерами в интернете
//Пример формата JSON:
/* 

{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}

*/

//Конвертация JSON в JavaScript объект
const primer = {
    userId: 1,
    id: 1,
    title: 'Test title',
    status: {
        completed: false
    }
}

//Конвертация JavaScript в JSON объект с помощью метода JSON.stringify()
const jsonPrimer = JSON.stringify(primer) //конвертация
console.log(jsonPrimer)

//Конвертация JSON в JavaScript объект с помощью метода JSON.parse()
console.log(JSON.parse(jsonPrimer)) //конвертация


//Мутация в JS
//мутирование копий
const person = {
    name: 'Bob',
    age: 25
}

const person2 = person //копирование ссылки

person2.age = 27
person2.isAdult = true

console.log(person.age) //27
console.log(person.isAdult) //true


//Как избежать мутации. Вариант №1
const person3 = {
    name: 'Bob',
    age: 25
}

const person4 = Object.assign({}, person3) //создаем копию объекта "person3"
//!но если у объекта которую мы хотим скопировать есть вложенные объекты, то ссылки на них сохраняются (другими словами вложенные объекты не копируются, они все ещё подвержены мутации)

person4.age = 27 //меняем свойство уже в новом объекте
person4.isAdult = true //добавляем свойство уже в новом объекте

console.log(person3.age) //25 //свойсто объекта не изменилось
console.log(person4.age) //27 //измененные свойства в скопированном объекте
console.log(person4.isAdult) //true


//Как избежать мутации. Вариант №2
const person5 = {
    name: 'Bob',
    age: 25
}

const person6 = { ...person5 } //еще один способ создать копию объекта "person5"
//три точки "..." это оператор разделения объекта на свойства
//!та же особенность, если у объекта которую мы хотим скопировать есть вложенные объекты, то ссылки на них сохраняются (другими словами вложенные объекты не копируются, они все ещё подвержены мутации)

person6.name = 'Alice'

console.log(person5.name) //Bob
console.log(person6.name) //Alice


//Как избежать мутации. Вариант №3
const person7 = {
    name: 'Bob',
    age: 25
}

const person8 = JSON.parse(JSON.stringify(person7)) //еще один способ создать копию объекта "person7"
//!и только этим способом ссылки на вложенные объекты не сохраняются т.е. объект копируется полностью включая вложенные объекты

person8.name = 'Alice'

console.log(person7.name) //Bob
console.log(person8.name) //Alice


//Функции. Функция - это блок кода которую можно выполнять многократно
let q = 5
let w = 8

function sum(q, w) {
    const c = q + w
    console.log(c)
}

sum(q, w) //13

q = 34
w = 12

sum(q, w) //46
sum(12, 6) //18
//если вы видите что какой-то блок вашего кода повторяется многократно, то лучше создайте для неё функцию


//Функция - это объект
console.log(sum.length) //2
console.log(sum.name) //sum
//в данном примере мы отобразили свойства объекта(функции), что озночает, что и функции это объекты

//Функция всегда возвращает какое-либо значение
//Функция возвращает undefined если нет инструкции return


//Пример передачи объекта в функцию
const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personOne) //передача объекта по ссылке в функцию
console.log(personOne.age) //22
//НО внутри функции не рекомендуется мутировать(изменять) внешние объекты, лучше для этих целе создать копию объекта и уже потом его мутировать

//Пример с копией:
const personTwo = {
    name: 'Jimmy',
    age: 23
}

function increasePersonAge_1(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonTwo = increasePersonAge_1(personTwo)
console.log(personTwo.age) //23
console.log(updatedPersonTwo.age)  //24


//Колбэк функции
function anotherFunction() {
    //Действия...
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction) //обратите внимание что передаем только название функции без аргументов

//Пример
function printMyName() {
    console.log('Arsen')
}

//* setTimeout(printMyName, 100) //setTimeout это встроенная ф-я, она позволяет выполнить функ-ю с задержкой


//Области видимости
let a3
let b3

function myFn() {
    let b3
    a3 = true //переменная используется из глобальной области видимости т.к. не была объявлена в самой функции
    b3 = 10
    console.log(b3) //10
}

myFn()

console.log(a3) //true
console.log(b3) //undefined //переменная не использовалась т.к. переменная с таким же названием была объявлена внутри ф-ии


//Цепочка областей видимости
const a4 = 5

function myFn_1() {
    function innerFn() {
        console.log(a4) //5 //переменную а4 пытаются найти вначале в ф-ии innerFn, потом в ф-ии myFn_1, потом в глобальной области видимости, так образуется цепочка областей видимости
    }
    innerFn()
}

myFn_1()


//Оператор typeof
const typeofCheck = typeof 5
console.log(typeofCheck) //number

const typeofCheck2 = typeof 'Ars'
console.log(typeofCheck2) //string

const typeofCheck3 = typeof false
console.log(typeofCheck3) //boolean


//Оператор ! (отрицание) этот оператор всегда приводит значения в булевое состояние
const ee = !5
console.log(ee) //false

const ee2 = !'Way'
console.log(ee2) //false

const ee3 = !0
console.log(ee3) //true


//Оператор !! (двойное отрицание) этот оператор всегда приводит значения в булевое состояние. С помощью двой-го отрицания можно проверять булевое значение переменных
const ea = !!5
console.log(ea) //true

const ea2 = !!'Way'
console.log(ea2) //true

const ea3 = !!0
console.log(ea3) //false


//Оператор Boolean(). По сути тоже что и двойное отрицание "!!""
const eaa = Boolean(5)
console.log(eaa) //true

const eaa2 = Boolean('Way')
console.log(eaa2) //true

const eaa3 = Boolean(0)
console.log(eaa3) //false


//Оператор && - возвращает первое ложное значение, а если таких нет, вернет последнее значение
const re = 5
const ty = 'Rent'
const oi = re && ty && 0 && 'Tyu' && 1
console.log(oi) //0


//Оператор || - возвращает первое истинное значение, а если таких нет, вернет последнее значение
const req = 0
const tyq = ''
const oiq = req || tyq || 0 || 'Tyu' || 1
console.log(oiq) //Tyu


//Оператор разделения объекта на свойства "..."
const dodnor = {
    heart: true,
    bud: false
}

const newDonor = {
    ...dodnor, //разложили объект на свойства //если в объекте были такие же свойства, то они перезапишутсья, если стоят после оператора "..."
    lungs: true
}

console.table(newDonor)


//Объединение объектов
const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button)


//Конкатанация строк
const hello = 'Hello'
const world = 'World'

const greeting = hello + ' ' + world
console.log(greeting)


//Шаблонные строки
const hello2 = 'Hello'
const world2 = 'World'

const greeting2 = `${hello2} ${world2}`
console.log(greeting2)


//Присвоение функции переменной
const myFunction = function (cv, vn) {
    let ert
    cv++
    return ert = cv + vn
}

const resultMyFn = myFunction(5, 7) //13
console.log(resultMyFn) //13


//Функциональное выражение в вызове другой функции
//* setTimeout(function () { console.log('Отложенное сообщение') }, 1000)
//или
//* setTimeout(() => { console.log('Отложенное сообщение') }, 1000)


//Пример стрелочной функции
const myFunction2 = (cv, vn) => {
    let ert
    cv++
    return ert = cv + vn
}

const resultMyFn2 = myFunction2(2, 5) //8
console.log(resultMyFn2) //8


//Сокращение стрелочных функций
const myFunc = a => { //если один параметр, то круглые скобки можно опустить
    console.log('Yes!')
}

const myFunc_3 = (a, b) => a + b //фигурные скобки можно опустить если тело ф-ии состоит только из return
console.log(myFunc_3(2, 3)) //5

const myFunc_2 = (a, b) => { a + b } //если скобки добавить, тогда нужно добавить и return, иначе ф-я вернет undefined
console.log(myFunc_2(2, 3)) //undefined


//Значение параметров функции по умолчанию
//Пример №1
const multByFactor = (value, multiplier = 1) => value * multiplier

console.log(multByFactor(4, 5)) //20
console.log(multByFactor(5)) //5

//Пример №2
const newPost = (post, addedAt = Date()) => ({ //Date() - это встроенная ф-я для показа текущего времени //кргулые скобки перед фигурными нужны чтобы неявно вернуть объект
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Arsen'
}

const infoPost = newPost(firstPost)
console.table(infoPost)


const newPostReturn = (post, addedAt = Date()) => { //Date() - это встроенная ф-я для показа текущего времени //здесь объект возвращаем явно с помощью return, без круглых скобок
    const newPost = {
        ...post,
        addedAt,
    }
    return newPost
}


//Обработка ошибок
const fnWithError = () => {
    throw new Error('Some error') //создаем ошибку
}

//* fnWithError() //выдаст ошибку "Error: Some error" и код дальше не пройдет

console.log('Continue...') //это выражение не выполнится из-за ошибки на 551 строке


//try/catch - обработчик ошибок
const fnWithError_1 = () => {
    throw new Error('Some error') //создаем ошибку
}

try {
    fnWithError_1() //будет ошибка
} catch (error) { //передаем сюда ошибку
    console.error(error) //выводим ошибку с помощью console.error - по идее должно выводится красным, но этого не происходит //здесь выводится вся ошибка
    console.log(error.message) //это выводит только сообщение ошибки //т.к. ошибка это тоже объект и у него есть свойство message
}

console.log('Continue...') //выражение выполнится т.к. ошибка была поймана


//Формат записи массивов
const myArray = [1, 2, 3] //это массив
console.log(myArray) //[1, 2, 3]

const myArray_1 = new Array(1, 2, 3) //и это еще один способ записи массивов
console.log(myArray_1) //[1, 2, 3]

console.log(myArray == myArray_1) //false //так происходит потому что оператор сравнения, сравнивает ссылки на два разных объекта в памяти, но не смотрит на содержимое


//Чтение массивов
const myArray_2 = [true, 'Ars', 5, 'Yes!']

console.log(myArray_2.length) //4 //так можно посмотреть длину массива
console.log(myArray_2[0]) //true
console.log(myArray_2[1]) //'Ars'


myArray_2.length = 7 //можно вручную поменять длину массива, после этой процедуры не заполненные массивы будут отображаться как пустые
console.log(myArray_2) //[ true, 'Ars', 5, 'Yes!', <3 empty items> ]


myArray_2[2] = 99999 //здесь мы вручную поменяли значение одного из свойств массива
console.log(myArray_2) //[ true, 'Ars', 99999, 'Yes!', <3 empty items> ]

myArray_2.length = 4
console.log(myArray_2) //4
myArray_2[4] = 'Gonza' //добавили еще одно свойство //но есть недостаток, надо знать длину массива
console.log(myArray_2.length) //5 //автоматически обновил значение
console.log(myArray_2) //[ true, 'Ars', 99999, 'Yes!', 'Gonza' ]


//Метод массива Push
myArray_2.push(false) //метод добавляет свойство в конец массива //здесь не нужно знать длину массива
myArray_2.push(149)
console.log(myArray_2)


//Метод массива Pop
myArray_2.pop() //удалили свойство в конце массива
console.log(myArray_2)

const removedElement = myArray_2.pop() //метод Pop не просто удаляет, он скорее возвращает элемент массива
console.log(myArray_2) //[ true, 'Ars', 99999, 'Yes!', 'Gonza' ]
console.log(removedElement) //false //вернули элемент массива


//Метод масссива Unshift
myArray_2.unshift('Noooo!!!') //добавляем элемент в начало массива //используется редко
console.log(myArray_2)


//Метод масссива Shift
myArray_2.shift() //удаляет первый элемент в начале массива //он также возвращает удаленное значение
console.log(myArray_2)


//Метод масссива forEach. Очень популярный метод. В качестве аргумента принимает функцию
const myArray_3 = [1, 2, 3, 4]

myArray_3.forEach(el => console.log(el * 2)) //взяли каждый элемент и умножили на 2, не меняя при этом оригинал. массив

console.log(myArray_3) //[ 1, 2, 3, 4 ] //оригинальный массив не меняется от forEach


//Еще пример
const myArray_4 = ['first', 'second', 'third']

myArray_4.forEach((element, index) => { //второй аргумент index опционален, он выводит индекс элементов
    console.log(element, index)
})


//Метод масссива Map. Тоже очень популярный метод. В качестве аргумента принимает функцию
const newArray = myArray_3.map(el => el * 2) //взяли каждый элемент и умножили на 2, не меняя при этом оригинал. массив, но при этом есть возможность сохранить рез-т в новом массиве
console.log(newArray) //[ 2, 4, 6, 8 ] //сохранили рез-т в новом массиве
console.log(myArray_3) //[ 1, 2, 3, 4 ] //оригинал. массив при этом не изменился


//Деструктуризация объектов
const userProfile_1 = {
    name_1: 'Babishhh',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { name_1, commentsQty } = userProfile_1 //присваиваем значение свойства объекта переменной
const { hasSignedAgreement } = userProfile_1

console.log(name_1) //Babishhh
console.log(commentsQty) //23
console.log(hasSignedAgreement) //false


//Деструктуризация массивов
const fruits = ['Apple', 'Banana']

const [fruitsOne, fruitsTwo] = fruits //присваиваем значение свойства массива переменной
//если присвоить в две строки то оба значения будут 'Apple'

console.log(fruitsOne, fruitsTwo) //Apple Banana


//Деструктуризация функции
const userInfo = ({ name_1, commentsQty }) => { //передаем параметры из свойств объекта
    if (!commentsQty) {
        return `User ${name_1} has no comments`
    }
    return `User ${name_1} has ${commentsQty} comments`
}

console.log(userInfo(userProfile_1))


//Инструкция if
let val = 10

if (val > 5) { //код выполниться один раз если условие правдиво (true)
    val += 20
}

console.log(val) //30

//Еще пример
const person_1 = {
    age: 20
}

if (!person_1.name) { //т.к. в объекте отсутствует свойство name, блок кода выполниться 
    console.log('Имя не указано')
}


//Инструкция if else
let val_1 = 10

if (val_1 < 5) { //не выполниться, условие false
    val_1 += 20
} else { //значит выполнится этот код
    val_1 -= 20
}

console.log(val_1) //-10


//Инструкция if else if
const age_1 = 25

if (age_1 > 18) { //выполниться этот код так как условие true, остальной код не рассматривается
    console.log('Is adult')

} else if (age >= 12) {
    console.log('Is teenager')

} else {
    console.log('Is child')
}


//Использование if в функциях
const sumPositiveNumbers = (a_1, b_1) => {
    if (typeof a_1 !== 'number' || typeof b_1 !== 'number') {
        return 'One of the argument in not a number'

    } else if (a_1 < 0 || b_1 < 0) {
        return 'Numbers are not positive'

    } else {
        return a_1 + b_1
    }
}

console.log(sumPositiveNumbers(9, 5))


//Инструкция swith
const month = 2

switch (month) {
    case 12: //код выполниться если case === month
        console.log('Декабрь')
        break //break нужен чтобы код дальше не рассматривался
    case 1: //код выполниться если case === month
        console.log('Январь')
        break
    case 2: //код выполниться если case === month
        console.log('Февраль')
        break
    default: //код выполниться во всех остальных случаях
        console.log('Это не зимний месяц')

}


//Тернарный оператор
const value_1 = 11

value_1
    ? console.log('Условие истинно') //если value_1 истинно то печатаем этот код, и возвращаем значение 
    : console.log('Условие ложно') //если value_1 ложно то печатаем этот код, и возвращаем значение 


//Еще пример
let value_2 = 11
console.log(value_2 >= 0 ? value_2 : -value_2) //11

value_2 = -5
const res = value_2 >= 0 ? value_2 : -value_2
console.log(res) //5


//Циклы
//Цикл for
for (let i = 0; i < 5; i++) { //выполняется пока условие true
    console.log(i)
}


//Пример использования цикла for для перебора элементов массива. Но так делать не реком-ся, реком-ся использовать методы, котрые есть у массивов, например: forEach, map и т.д.
const myArrayM = ['first', 'second', 'third']

for (let i = 0; i < myArrayM.length; i++) {
    console.log(myArrayM[i])
}


//Цикл while
let y = 0

while (y < 5) { //выполняется пока условие true
    console.log(y)
    y++ //если убрать эту переменную цикл будет бесконечный
}


//Цикл do while
let u = 0

do { //выполняется хотя бы раз
    console.log(u)
    u++
} while (u < 5) //выполняется пока условие true


//Еще пример
let k = 10

do {
    console.log(k)
    k++
} while (k < 0) //условие ложно, поэтому do выполнится один раз


//Цикл for in для объектов
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) { //key это название свойст объекта //цикл выполняет определенные действия с каждым свойством объекта
    console.log(key, myObject[key]) //myObject[key] это значение свойств объекта
}


//Еще один способ. ForEach для объекта, через Object.key 
const myObject_1 = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.keys(myObject_1).forEach(key => console.log(key, myObject_1[key])) //Object.keys - получение всех ключей объекта в виде массива


//Еще один способ. ForEach для объекта, через Object.values 
const myObject_2 = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.values(myObject_2).forEach(value => console.log(value)) //Object.values - получение всех значений свойств объекта в виде массива


//For in для массивов
const myArray_5 = [true, 10, 'abc', null]

for (const key in myArray_5) {
    console.log(key, myArray_5[key])
}
//так делать не рекомендуется, т.к. у массивов есть свои методы


//Цикл for of
const myName = 'Arsen'

for (const symbol of myName) { //этот цикл перебирает каждый символ (к примеру строки делит на буквы)
    console.log(symbol)
}


//For of для массивов. Данный цикл не подходит для объектов, при приминении выдаст ошибку
const myArray_6 = [true, 10, 'abc', null]

for (const symbol of myArray_6) { //перебирает все элементы массивов
    console.log(symbol)
}
//так делать не рекомендуется, т.к. у массивов есть свои методы


//Классы
//Классы шаблоны для создания новых объектов
class Comment {
    constructor(text) { //constructor нужен для создания нового экземпляра класса
        this.text = text //переменная this указывает на экземпляр класса
        this.votesQty = 0
    }

    upvote() { //остальные методы буду наследоваться каждым экземпляром класса
        this.votesQty += 1
    }
}

//Создание экземпляра
const firstComment = new Comment('First comment') //создаем экземпляр //new вызывает функцию constructor

console.log(firstComment)

firstComment.upvote() //используем метод объекта, созданный из класса
console.log(firstComment)

firstComment instanceof Comment //true //проверка принадлежности
firstComment instanceof Object //true
firstComment instanceof Array //false //firstComment не принадлежит массивам


//Проверка принадлежности свойств экземпляру объекта
const secondComment = new Comment('Second comment')

secondComment.hasOwnProperty('text') //true
secondComment.hasOwnProperty('votesQty') //true
secondComment.hasOwnProperty('upvote') //false //потому что, это не собственное свойство объекта, оно наследуется
secondComment.hasOwnProperty('hasOwnProperty') //false


//Статические методы
class Comment_1 {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) { //метод доступен как свойство класса и недоступен экземплярами класса
        return `${first} ${second}`
    }
}

const commnetsConsole = Comment_1.mergeComments('First comment', 'Second comment')
console.log(commnetsConsole)


//Расширение других классов
class NumbersArray extends Array { //родительский конструктор класса Array вызовется автоматически
    sum() { //метод sum будет автоматически суммировать все элементы любого массива
        return this.reduce((el, acc) => acc + el, 0)
    }
}

const myArray_7 = new NumbersArray(2, 5, 7)

console.log(myArray_7)
console.log(myArray_7.sum()) //14

NumbersArray.prototype === myArray_7.__proto__ //true //просто интересный факт), __proto__ это скрытое свойство //все ради того чтобы создать видимость того, что JS это ООП язык)


//Строки и числа ведут себя как объекты
const myFirstName = 'Arsen'
console.log(myFirstName) //Arsen

const myFirstNameUpperCase = myFirstName.toUpperCase() //'ARSEN' //переменная ведет себя как объект давая вызывать различные методы
console.log(myFirstNameUpperCase)


const mySecondName = new String('Azizkhanov') //создали новый экземпляр класса строка
console.log(mySecondName) //[String: 'Azizkhanov']

mySecondName.toUpperCase() //у него точно такие же методы как и у myFirstName

for (const key in mySecondName) {
    console.log(key, mySecondName[key])
}


//Промисы. Позволяют обрабатывать отложеннын во времени события
//Промис - это обещание предоставить результат позже
//Промис может вернуть ошибку если результат предоставить невозможно
//Состояния промиса: 1)ожидание, 2)исполнен или отклонен

/* const myPromis = new Promis((resolve, reject) => { //здесь параметры это функции
    //*Выполнение асинхронных действий
    //*Внутри этой функции нужно в рез-те вызвать одну из функций resolve или reject
}) */

//Получение рез-та промиса
/* myPromise
    .then(value => {
        //*Действия в случае успешного выполнения промиса
        //*Value - это значение, переданное в вызове функции resolve внутри промиса
    })
    .cath(error => { 
        //*Действия в случае отклонения промиса
        //*Error - это значение, переданное в вызове функции reject внутри промиса
    })
 */


//Получение данных с помощью Fetch API
fetch('https://jsonplaceholder.typicode.com/todos/2') //возвращает промис //запрос на сервер
    .then(response => response.json()) //получаем объект, большой и не понятный, поэтому надо вызвать метод json //метод json тоже возвращает промис, поэтому метод then вызван еще раз
    .then(json => console.log(json)) //выводим уже нормальный объект
    .catch(error => console.error(error))


//Еще пример
const getData = url =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/5')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))


//Async / Await - специальный синтаксис для упрощения работы с промисами

/* const asyncFn = async () => {
    //*Всегда возвращает промис
} */

//еще вариант написания
/* async function asyncFn() {
    //*Всегда возвращает промис
} */

//Пример №1
const asyncFn = async () => {
    return 'Success!' //в любом случае вернет сначал промис, а потом в resolve передаст эту строку
}

asyncFn()

//Пример №1. Продолжение
const asyncSecondFn = async () => {
    return 'Success!' //в любом случае вернет сначал промис, а потом в resolve передаст эту строку
}

asyncSecondFn()
    .then(value => console.log(value)) //из resolve строка попадает в value


//Пример №2.
const asyncFourthFn = async () => {
    throw new Error('There was an error')
}

asyncFourthFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message)) //обработка ошибки

//Пример №3. Await
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))

const asyncFunc = async () => {
    console.log('Timer start')
    await timerPromise() //ожидает результата промиса, а пока ожидает выполняется остальной код
    console.log('Timer ended')
}

asyncFunc()


//Переход с промисов на async/await
const getData_1 = url =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/7')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

//можно переписать вверхнюю часть вот так:
const getData_2 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

getData_2('https://jsonplaceholder.typicode.com/todos/8')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

//можно переписать нижнюю часть вот так:
/*  const getData_3 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/9'

const data = await getData_3(url) //работает тока в браузере т.к. await должен использоваться только в async функциях, но браузеры позволяют и вне async //нет обработки ошибок, поэтому его надо добавлять в try/catch обработчик ошибок */

//переписываем нижнюю часть
/* const getData_4 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url_1 = 'https://jsonplaceholder.typicode.com/todos/10'

try {
    const data_1 = await getData_4(url_1)
    console.log(data_1)
} catch (error) {
    console.log(error.message) //есть обработка ошибок
} */