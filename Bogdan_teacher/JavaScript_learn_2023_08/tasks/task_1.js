'use strict'


//? Задача №1
/* Создание и доступ к свойствам объекта:
Создайте объект person с свойствами name, age и city.Выведите в консоль информацию о человеке в виде предложения, используя свойства объекта. */

const person = {
    name: 'Arsen',
    age: 27,
    city: 'Makhachkala'
}

console.log('Имя: ' + person.name + ', возраст ' + person.age + ' лет, проживает в городе: ' + person.city)