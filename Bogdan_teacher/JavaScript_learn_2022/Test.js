'use strict'

let loginUser = 'Afk'
let passwordUser

if (loginUser === 'Admin') {
    passwordUser = 15

    if (passwordUser === 'Я главный') {
        console.log('Здравствуйте')
    } else if (passwordUser === null) {
        console.log('Отменено')
    } else {
        console.log('Неверный пароль!')
    }

} else if (loginUser === null) {
    console.log('Отменено')
} else {
    console.log('Я вас не знаю')
}

console.log(passwordUser)