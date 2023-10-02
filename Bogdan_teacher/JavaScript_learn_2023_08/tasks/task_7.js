'use strict'

//? Задача №7
/* Выведите строку задом наперед */

const solution = str => {
    const world = str.split('').reverse().join('')
    console.log(world)
}

solution('hello')