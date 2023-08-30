//Простая функция
function a() {
    console.log('Простая функция')
}

a()


//Стрелочная функция (присваивается к переменной, сама функция названия не имеет)
const b = () => {
    console.log('стрелочная функция, можно использовать константу')
}

b()


//Переменная - объект
const myCity = {
    city: 'Makhachkala',
    popular: false,
    country: 'Dagestan'
}

console.log(myCity)
//Использование свойства объекта
console.log(myCity.city)
console.log(myCity.popular)
//Изменение свойства объекта (не смотря на то что переменная const; изменять, удалять, добавлять что либо в объект разрешается)
myCity.city = 'Tashkent'

console.log(myCity.city)
//Добавления свойства в объект
myCity.poselok = 'Semender'

console.log(myCity)
//Удаление свойств объекта
delete myCity.poselok

console.log(myCity)


//Доступ к значению свойства с испол-ем скобок
const myCity2 = {
    city: 'New York'
}

myCity2['popular'] = true

console.log(myCity2)

const countryPropertyName = 'country'
myCity2[countryPropertyName] = 'USA'

console.log(myCity2)


//Вложеннные свойства
const myCity3 = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity3.info.isPopular)
console.log(myCity3.info['country'])
console.log(myCity3)


//Испол-е перем-х и сокращенное испол-е перем-х
const name = 'Arsen'
const postsQty = 23

const userProfile = {
    name, //тоже самое name: name,
    postsQty, //postsQty: postsQty,
    hasSignedAgreement: false
}


//Методы-свойства объектов которые содержат функции
const myCity4 = {
    city: 'Dubai',
    /* cityGreeting: () {
        console.log('Greetings!!')  //Сокращенная запись
    } */
    cityGreeting: function () {
        console.log('Greetings!!')
    }
}

myCity4.cityGreeting()


//JSON код
/* {
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
} */


//Конвертация JSON в JavaScript и обратно
const post = {
    title: 'My post',
    likesQty: 5
}

const postStringified = JSON.stringify(post) //конвертация в JSON, при этом не меняя исходный объект
console.log(postStringified) //{"title":"My post","likesQty":5} //JSON

console.log(post) //исхожный объект не поменялся //{ title: 'My post', likesQty: 5 }

console.log(JSON.parse(postStringified)) //{ title: 'My post', likesQty: 5 } //обратная конвертация


//Мутирование объекта копией
const person = {
    name: 'Arsen',
    age: 26
}

const person2 = person  //Копирование ссылки

person2.age = 27
person2.isAdult = true

console.log(person.age) //27
console.log(person.isAdult) //true


//Как избежать мутации вариант 1
const person3 = {
    name: 'Bob',
    age: 24
}

const person4 = Object.assign({}, person3) //но сохраняются ссылки на вложенный объект т.е. вложенные объекты мутируют

person4.age = 25

console.log(person3)
console.log(person3.age) //24
console.log(person4.age) //25


//Как избежать мутации вариант 2
const person5 = {
    name: 'Bob',
    age: 24
}

const person6 = { ...person5 } //но сохраняются ссылки на вложенный объект т.е. вложенные объекты мутируют

person6.name = 'Maga'

console.log(person5.name) //Bob
console.log(person6.name) //Maga


//Как избежать мутации вариант 3
const person7 = {
    name: 'Dzho',
    age: 22
}

const person8 = JSON.parse(JSON.stringify(person7)) //ссылки на вложенный объект не сохраняются т.е. вложенные объекты также копируется

person8.name = 'Amina'

console.log(person7.name) //Dzho
console.log(person8.name) //Amina


//Функции
let aa = 5
let bb = 3
let cc

cc = aa + bb
console.log(cc) //одинаковые блоки кода

aa = 8
bb = 12

cc = aa + bb
console.log(cc) //одинаковые блоки кода


//Создание функции чтобы не повторять одинаковые блоки кода
let a1 = 5
let b1 = 3

function sum(a1, b1) {
    const c1 = a1 + b1
    console.log(c1)
}

sum(a1, b1)

a1 = 8
b1 = 12

sum(a1, b1)


//Передача объекта в функцию без копии
const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(personn) { // без копии объекта не рекомендуется изменять объект
    personn.age += 1
    return personn
}

increasePersonAge(personOne)
console.log(personOne)


//Передача объекта в функцию с копией
const personTwo = {
    name: 'Bob',
    age: 23
}

function increasePersonAge1(person2) {
    const personUpdate = Object.assign({}, person2)  //копируем объект
    personUpdate.age += 2
    return personUpdate
}

const personTwoUpdate = increasePersonAge1(personTwo)
console.log(personTwo)
console.log(personTwoUpdate)


//Колбэк функции
function printMyName() {
    console.log('Bogdanoff')
}

//setTimeout(printMyName, 1000) //вызывает функцию через указанное время


//Области видимости
let a2
let b2

function myFn() {
    let b2 //эта переменная видна только в этой функции
    a2 = true
    b2 = 10
    console.log(b2)
}

myFn() //10

console.log(a2) //true
console.log(b2) //undefined


//Цепока областей видимости
const d = 5

function myFun() {
    function innerFun() {
        console.log(d)
    }
    innerFun()
}

myFun()


//Область видимости. Как делать не рекомендуется
function myFn1() {
    aaa = true //переменная будет объявлена автоматически в глобальной области (не в локальной!) видимости т.к. её нигде не объявляли
    console.log(aaa)
}
//для того чтобы перем-я не объявлялась автом-ки можно исп-ть "строгий режим" написав код в самом начале 'use strict'
myFn1()

console.log(aaa)


//Операторы
console.log(typeof 10 !== 'number')
console.log(typeof 10 === 'number')

!10         //false
!0          //true
!'abc'      //false
!''         //true
!true       //false
!undefined  //true

!!10         //true
!!0          //false
!!'abc'      //true
!!''         //false
!!true       //true
!!undefined  //false

let df = !!{}
console.log(df + ' here') //пустой объект истина

let ert = 10
ert && console.log('Выполнено!&&1')

let rty
rty && console.log('Выполнено!&&2') //не выполнить консоль команду т.к. первое значение ложное

let ert1 = 10
ert1 || console.log('Выполнено!||1')

let rty1
rty1 || console.log('Выполнено!||2') //выполнить консоль команду т.к. первое значение ложное


//Оператор "..."
const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red' //если у исходного объекта будет такое свойство то оно будет перезаписано у копии
} //скопировали и добавили свойства в объект

console.table(redButton)

console.log(redButton)
console.log(button)


//Объединение объектов с помощью "..."
const zxc = {
    text: 'Buy'
}

const rfv = {
    color: 'yellow',
    width: 200,
    height: 300
}

const yhn = {
    ...zxc, //если будут одинаковые свойства то перезапишет тот кто ниже в коде
    ...rfv
}

console.table(yhn)


//Шаблонные строки
const hello = 'Hello'
const world = 'World'

const greeting = `${hello} ${world}` //аналог ему -> console.log(hello + ' ' + world)

console.log(greeting)
console.log(hello + ' ' + world)


//Присваивание функционального выражения переменной
const mmyFunction = function (aw, bw) { // или const mmyFunction = (aw, bw) => {и т.д.}
    let c5
    aw++
    c5 = aw + bw
    return c5
}

mmyFunction(5, 3)
console.log(mmyFunction(5, 3))


//Значение параметров функции по умолчанию
function multByFactor(value, multiplier = 1) { //в данной функции можно указать как один аргумент так и два, если указать один то второй по умолчанию выставится = 1
    return value * multiplier
}

console.log(multByFactor(10, 2)) //20
console.log(multByFactor(5)) //5

/* const multByFactor = (value, multiplier = 1) => value * multiplier //аналог ф-ии выше

console.log(multByFactor(10, 2)) //20
console.log(multByFactor(5)) //5 */


//Показывает текущую дату
console.log(Date())

const qwerty = {
    width: 10,
    height: 25
}

//radius = 1 значение по умолчанию
const jkl = (jbj, radius = 1) => ({
    ...jbj,
    radius,
})

const qwertyUpdate = jkl(qwerty)
console.log(qwertyUpdate)


//Аналог ф-ии выше
const qwerta = {
    width: 10,
    height: 25
}

const jka = (jbj, radius = 1) => {
    const jbjj = Object.assign({}, jbj)
    jbjj.radius = radius
    return jbjj
}

console.log(jka(qwerta, 5)) //копия изменилась
console.log(qwerta) //оригинал объект сохранился


//Ошибки
/* const fnWithError = () => {
    throw new Error('Some error') //код для выдачи ошибки
}

fnWithError()

console.log('Continue...') */


//Работа с ошибками и их ловля
const fnWithError = () => {
    throw new Error('Some error') //код для выдачи ошибки
}

try {
    fnWithError()
} catch (error) {  //catch выполняется в случае ошибки
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')


//Формат записи массивов
const myArray = [1, 2, 3] //можно добавлять не только числа
console.log(myArray)

const myArray2 = new Array(1, 2, 3) //можно добавлять не только числа
console.log(myArray2)


//Функция-конструктор
function User(name) { //функция создает новый объект с текущими свойствами при её вызове. Принято функции-конструкторы называть с заглавной буквы
    this.name = name
    this.isAdmin = false
}

let user = new User('Jack') //создание объекта user со свойствами указанных в функции
let user1 = new User('Arsen') //создание объекта user1 со свойствами указанных в функции

console.log(user) //User { name: 'Jack', isAdmin: false }
console.log(user1) //User { name: 'Arsen', isAdmin: false }


//Мои эксперименты
function Ars() { //создай хоть такую функцию. При её вызове с помощью new она создаст пустой объект
    console.log('nice')
}

let was = new Ars() //вызвали, создала пустой объект
console.log(was) //Ars {}


//Массивы
const myArr = [1, false, 'Arsen'] //если создать такой же массив то они НЕ будут равны т.к. ссылаются на разные объекты в памяти
console.log(myArr)


//Чтение значений массива (если свойтсва в объекте цифровые то для этого нельзя использовать точеченую запись, нужно исполь-ть квадратные скобки)
//Порядок следования в массиве важен в отличие от объекта
const myArrray = [1, true, 'enot']
console.log(myArrray) //[1, true, 'enot']

console.log(myArrray[0]) //1
console.log(myArrray[1]) // true

console.log(myArrray.length) //3


//Изменение массива
const myMassiv = [1, 2, 3, 4]
console.log(myMassiv) //[1, 2, 3, 4]
console.log(myMassiv.length) //4

myMassiv[2] = 'abc'

console.log(myMassiv) //[1, 2, 'abc', 4]
console.log(myMassiv[2]) //'abc'

myMassiv[4] = true

console.log(myMassiv) //[1, 2, 'abc', 4, true]
console.log(myMassiv.length) //5


//Метод Push для массива (добавление элементов в конец массива)
const myPush = [1, 2, 3, 4]
/* myPush.push('vb')
myPush.push(true)
myPush.push(7) */
myPush.push(5, true, 'element')

console.log(myPush)  //[ 1, 2, 3, 4, 5, true, 'element' ]


//Метод Pop для массива (удаляет элемент в конец массива)
const myPop = [1, 2, 3, 4]
console.log(myPop) //[1, 2, 3, 4]

myPop.pop()

console.log(myPop) //[1, 2, 3]

const removedElement = myPop.pop() //Pop также удаляя элемент может присвоить ее другой переменной

console.log(myPop) //[1, 2]
console.log(removedElement) //3


//Метод Unshift для массива (добавляет элемент в начало массива)
const myUnshift = [1, 2]
console.log(myUnshift) //[1, 2]

myUnshift.unshift(0)

console.log(myUnshift) //[0, 1, 2]


//Метод Shift для массива (удаляет элемент в начале массива)
const myShift = [1, 2, 3]
console.log(myShift) //[1, 2, 3]

myShift.shift()
console.log(myShift) //[2, 3]

const removeddElement = myShift.shift() //Shift также удаляя элемент может присвоить ее другой переменной

console.log(myShift) //[3]
console.log(removeddElement) //2


//Метод forEach для массива (производит действие над каждым элементом массива с помощью функции который передается в этот метод, но не изменяет сам массив и её элементы)
//Метод forEach возвращает undefined! (очень популярный метод)
const myForEach = [1, 2, 3]
console.log(myForEach + ' myForEach') //[1, 2, 3 myForEach]

myForEach.forEach(el => console.log(el * 2)) //2 //4 //6
console.log(myForEach) //[1, 2, 3] //оригинальный массив не меняется


//Метод Map для массива (производит действие над каждым элементом массива с помощью функции который передается в этот метод, но не изменяет сам массив и её элементы)
////Метод Map возвращает новый измененный массив!(очень популярный метод)
const myMap = [1, 2, 3]
console.log(myMap + ' myMap') //[1, 2, 3 myMap]

const newMyMap = myMap.map(el => el * 2) //если в функцию доб-ются фигурные скобки то также не забываем про return, иначе ф-я вернет undefined.Пример:
/* const newMyMap = myMap.map((el) => {
    return el * 2
}) */
console.log(newMyMap) //[2, 4, 6]
console.log(myMap) //оригинальный массив не изменился


//Деструктуризация объектов
const userProfile2 = {
    name2: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { name2, commentsQty } = userProfile2 //объявление новых переменных и присваивание значений на основе значений свойств объекта
const { hasSignedAgreement } = userProfile2 //можно и в одну строку

console.log(name2) //Bogdan
console.log(commentsQty) //23
console.log(hasSignedAgreement) //false


//Деструктуризация массивов
const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits //объявление новых переменных и присваивание значений на основе значений свойств объекта

console.log(fruitOne) //Apple
console.log(fruitTwo) //Banana


//Деструктуризация в функциях
const userProfile3 = {
    name2: 'Bogdan',
    commentsQty: 25,
    hasSignedAgreement: false
}

const userInfo = ({ name2, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name2} has no comments`
    }

    return `User ${name2} has ${commentsQty} comments`
}

console.log(userInfo(userProfile3)) //User Bogdan has 23 comments


//Инструкция 'if'
let val = 10

if (val > 5) {
    val += 20
}

console.log(val) //30


//Пример 'if' с оператором отрицания
const person9 = {
    age: 20
}

if (!person9.name) {
    console.log('Имя не указано') //Имя не указано
}


//Инструкция 'if else'
let val1 = 10

if (val1 < 5) {
    val1 += 20
}
else {
    val1 -= 20
}

console.log(val1) //-10


//Инструкция 'if else if'
const age1 = 25

if (age1 > 18) { //условие верно
    console.log('Is adult') //выполняется этот код
} else if (age1 >= 12) {
    console.log('Is teenager') //этот код не рассматривается т.к. предыдущее условие true
} else {
    console.log('Is child')
}


//Инструкция 'if if if...'
const age2 = 25

if (age2 >= 18) { //условие верно
    console.log('Is adult') //выполняется этот код
}

if (age2 >= 12 && age2 < 26) { //условие верно
    console.log('Is teenager') //этот код также рассматривается т.к. условие if
}

if (age2 < 12) { //условие неверно
    console.log('Is child')
}


//Использование 'if' в функциях
const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
}

console.log(sumPositiveNumbers(3, 'myaauuu')) //One of the arguments is not a number
console.log(sumPositiveNumbers(-3, 4)) //Numbers are not positive
console.log(sumPositiveNumbers(7, 14)) //21


//Инструкция Switch
const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2: //month === 2 (true)
        console.log('Февраль')
        break
    default:
        console.log('Это не зимний месяц')
}


//Тернарный оператор
const value = 11

value
    ? console.log('Условие истинно') //value === true, поэтому исполнится первое выражение
    : console.log('Условие ложно')


//Тернарный оператор. Пример 2
let value2 = 11
console.log(value2 >= 0 ? value2 : -value2) //11


value2 = -5
const res = value2 >= 0 ? value2 : -value2
console.log(res) //5


//Цикл for
for (let i = 0; i < 5; i++) {
    console.log(i + ' цикл')
}


//Цикл for для массивов (исп-ть цикл for для массивов не рекомендуется)
const myArray3 = ['first', 'second', 'third']

for (let i = 0; i < myArray3.length; i++) {
    console.log(myArray3[i])
}


//Цикл forEach для массивов (рекомендуется) (возвращает undefined)
const myArray4 = ['first', 'second', 'third']

myArray4.forEach((element, index) => { //index можно не выводить (по желанию)
    console.log(element, index)
})


//Цикл while (может ни раз не выполниться если условие false)
let iii = 0

while (iii < 5) {
    console.log(iii)
    iii++
}

//Бесконечный цикл while
/* let iii = 0

while (iii < 5) {
    console.log(iii) 
} */


//Цикл do while (выполниться хотя бы один раз)
let ii = 0

do {
    console.log(ii + ' do')
    ii++
} while (ii < 5)


//Цикл do while Пример 2 (выполниться хотя бы один раз)
let ii2 = 10

do {
    console.log(ii2 + ' doo')
    ii2++
} while (ii2 < 5)


//Цикл for in для объектов
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])  //проходится по всем свойствам объекта
}


//Цикл forEach для объектов
const myObject1 = {
    u: 50,
    j: false,
    m: 'ghy'
}

Object.keys(myObject1).forEach(key => { //Object.keys - получение всех ключей объекта в виде массива
    console.log(key, myObject1[key])
})


//Цикл forEach Пример 2 для объектов
const myObject2 = {
    u: 50,
    j: false,
    m: 'ghy'
}

Object.values(myObject2).forEach(value => { //Object.values - получение всех значений свойств объекта в виде массива
    console.log(value)
})


//Изменение объекта в массив с помощью Object.keys
const myObject3 = {
    name: 'Arsen',
    age: 26
}

console.log(Object.keys(myObject3)) //выводит только ключ объекта


//Изменение объекта в массив с помощью Object.values
console.log(Object.values(myObject3)) //выводит только значение объекта


//Цикл for in для массивов (не рекомендуется)
const myArray5 = [true, 10, 'abc', null]

for (const key in myArray5) {
    console.log(key, myArray5[key])
}


//Цикл for of для строк (появился в ES6) (цикл разделяет все символы строки)
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}


//Цикл for of для массивов (не рекомендуется) (for of не для объектов, можно испол-ть только после конвертация объекта в массив)
const myString1 = [true, 40, 'aafwec']

for (const element of myString1) {
    console.log(element)
}


//Импорт / Экспорт
//moduleOne.js

/* const myName = () => {
    console.log('Arsen')
}

export default myName //становится доступной для других модулей

//moduleTwo.js

import printMyName from './moduleOne'

printMyName()  //Arsen */


//Несколько экспортов
//moduleOne.js

/* const one = 1
const two = 'two'

export {
    one,
    two
}

//moduleTwo.js
import {
    one as oneRenamed, //переименовываем переменную при желании
    two
} from './moduleOne.js'

console.log(one) //1
console.log(two) //'two' */


//Классы
class Comment {
    constructor(text) { //constructor вызывается только когда создается новый экземпляр объекта
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment') //new вызывает ф-ю constructor //создание экземпляра
console.log(firstComment) //Comment { text: 'First comment', votesQty: 0 } //объект firstComment также унаследовал метод upvote() из конструктора

/* firstComment.__proto__ === Comment.prototype //true */

firstComment instanceof Comment  //true //проверка принадлежности
firstComment instanceof Object //true

firstComment.upvote()
console.log(firstComment.votesQty) //1

firstComment.upvote()
console.log(firstComment.votesQty) //2

firstComment.hasOwnProperty('text') //true //проверка принадлежности свойств экземпляров у объекта
firstComment.hasOwnProperty('votesQty') //true
firstComment.hasOwnProperty('upvote') //false
firstComment.hasOwnProperty('hasOwnProperty') //false

//Создание нескольких экземпляров(объекта) от класса Comment
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

console.log(firstComment.__proto__ === Comment.prototype) //true 

//Статические методы
class Comment1 {
    constructor(text) { //constructor вызывается только когда создается новый экземпляр объекта
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeCommnet(first, second) { //метод доступен как свойство класса и не наследуется экземплярами класса
        return `${first} ${second}`
    }
}

Comment1.mergeCommnet('First comment', 'Second comment') //First comment Second comment


//Расширение других классов
class NumbersArray extends Array { //родительский конструктор (Array) вызовется автоматически
    sum() {
        return this.reduce((el, acc) => acc += el, 0) //reduce суммирует массив(не спрашивай как я сам не понял, че то там аккумулирует))
    }
}

const myArray6 = new NumbersArray(2, 5, 7)

console.log(myArray6) //NumbersArray(3) [ 2, 5, 7 ]
console.log(myArray6.sum()) //14


//Строки и числа ведут себя как объекты
const aasfsa = 'Arsen'
console.log(aasfsa.length) //5
console.log(aasfsa.toUpperCase()) //ARSEN

const mySecondName = new String('Arsen')
console.log(mySecondName) //[String: 'Arsen']


//Промисы
const myPromise = new Promise((resolve, reject) => {  //создание промиса
    //выполнение асинхронных действий
    //внутри этой ф-ии нужно в рез-те вызвать одну из ф-ий resolve или reject
})

//Получение рез-та промиса
myPromise
    .then(value => {
        //действия в случае успешного исполнения промиса
        //значение value - это значение, переданное в вызове ф-ии resolve внутри промиса
    })
    .catch(error => {
        //действия в случае отклонения промиса
        //значение error - это значение, переданное в вызове ф-ии reject внутри промиса
    })

//Получение данных с помощью fetch API (проверка в браузере (fetch не работает в node.js))
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error)) */

//Промисы Пример
/* const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))  //вызываем ф-ю resolve и передаем json
            .catch(error => reject(error))  //вызываем ф-ю reject и передаем error //catch выполнится в случае ошибки
    )

getData('https://jsonplaceholder.typicode.com/todos')  //вызываем ф-ю getData и передаем url
    .then(data => console.log(data))  //в date будет то что мы передали в ф-ю resolve
    .catch(error => console.log(error.message))  //в error будет то что мы передали в ф-ю reject
 */

//Асинхронная ф-я
/* async function asyncFn() {
    //всегда возвращает промис
}

const asyncFn = async () => {
    //всегда возвращает промис
} */


//Асинхронная ф-я. Пример 1
async function asyncFn1() {
    return 'Success!'  //вернёт не данную строку, а её промис и выполнит resolve этого промиса и в качесвте результата будет в ф-ю resolve будет передана данная строка
}

asyncFn1()
    .then(value => console.log(value)) //Success!


//Асинхронная ф-я с ошибкой. Пример 2
const asyncFn2 = async () => {
    throw new Error('There was an error')
}

asyncFn2()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))  //There was an error


//Асинхронная ф-я. Ожидания результата await. Пример 3
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))

const asyncFn3 = async () => {
    console.log('Timer starts')
    await timerPromise()  //ф-я дальше не выполняется пока не получен результат промиса (исполнен/отклонен)
    console.log('Timer ended')
}

asyncFn3()


//Асинхронная ф-я. Ожидания результата await. Пример 3(продолжение)
const timerPromise1 = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))

const asyncFn3Сontinuation = async () => {
    console.log('Timer starts')
    const startTime = performance.now()  // performance.now() - ставим между кодом которую хотим засечь
    await timerPromise1()  //ф-я дальше не выполняется пока не получен результат промиса (исполнен/отклонен)
    const endTime = performance.now()  // performance.now() - ставим между кодом которую хотим засечь
    console.log('Timer ended', endTime - startTime)
}

asyncFn3Сontinuation()


//Переход с промисов на async/await. Пример 4
const getData1 = async (url) => {
    const res = await fetch(url)
    const json1 = await res.json()
    return json1
}

getData1('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.log(error.message))


//Переход с промисов на async/await. Пример 4(модификация)
const getData2 = async (url) => {
    const res = await fetch(url)
    const json1 = await res.json()
    return json1
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

/* const data1 = await getData2(url) */ //но тут нету обработчика ошибок


//Переход с промисов на async/await. Пример 4(модификация 2)
const getData3 = async (url) => {
    const res = await fetch(url)
    const json1 = await res.json()
    return json1
}

const url1 = 'https://jsonplaceholder.typicode.com/todos/1'

try {  //с помощью try ловим ошибку, если она будет
    const data2 = await getData4(url)
    console.log(data2)
} catch (error) {
    console.log(error.message)
}