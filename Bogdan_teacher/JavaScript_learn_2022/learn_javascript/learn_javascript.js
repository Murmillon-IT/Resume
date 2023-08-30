'use strict'

/* На заметку: JavaScript - программисты часто вставляют вызов метода alert() в программный код с целью диагностики возникающих проблем. */
alert('Learn JavaScript \nперенос строки')  // alert выводит сообщение
document.write('JavaScript')

const result = confirm('Yes or No')

if (confirm('Вы уверены что вы даун???')) {  // confirm вывод сообщение с выбором OK или CANCEL в результате возвращает либо true либо false
    alert('Я очень рад за вас, таких как вы миллионы))')
} else {
    alert('Ну зачем врать самому себе?')
}

const userName = prompt('Здравствуйте, как вас зовут?', 'Мудак')  //prompt выводит окно чтобы вписать текст

if (userName === 'Мудак') {
    alert('Добро пожаловать друг))')
} 
else if (userName === null) {
    alert('Ты не указал имя. Чтож, так поступают настоящие овощи')
}
else {
    alert('Тебе здесь не рады ' + userName)
}