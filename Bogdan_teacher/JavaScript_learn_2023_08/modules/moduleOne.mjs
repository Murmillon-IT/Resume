'use strict'

const myName = () => {
    console.log('Arsen')
}
//все переменные доступны только в данном файле, если нет экспорта

export default myName //экспорт функции


//Несколько экспортов
const one = 1
const two = 'two'

export {
    one,
    two
}