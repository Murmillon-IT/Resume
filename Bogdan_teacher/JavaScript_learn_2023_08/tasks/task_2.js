'use strict'


//Задача №2
/* Добавление и удаление свойств:
Создайте объект car с начальными свойствами make и model.Добавьте свойства year и color, а затем удалите свойство model. */

const car = {
    make: 'Lada',
    model: 'Priora',
}

console.log(car)

car.year = 2012
car.color = 'black'

console.log(car)

delete car.model

console.log(car)