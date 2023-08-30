'use strict'

function userNameFunction() {
    let userName
    let userNameQuestion

    while (userNameQuestion !== true) {
        userName = prompt('Введите своё имя:')

        while (userName === '' || userName === null) {
            alert('Пожалуйста введите ваше имя')
            userName = prompt('Введите своё имя:')
        }

        userNameQuestion = confirm('Введенное имя правильное?')

        if (userNameQuestion) {
            alert('Здравствуйте, ' + userName)
        }
    }
}

userNameFunction()