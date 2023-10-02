'use strict'

//? Задача №9
/* Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке. */

function digitize(n) {
    const string = n.toString()
    const arrayString = string.split('')

    const arrayNumber = arrayString.map(el => {
        return parseInt(el)
    })

    const arrayReverse = arrayNumber.reverse()

    console.log(arrayReverse)
}

digitize(123345)









//И опять все намного проще)

//*          function digitize(n) {
//*              return String(n).split('').map(Number).reverse()
//*          }
//*          
//*          console.log(digitize(1213))