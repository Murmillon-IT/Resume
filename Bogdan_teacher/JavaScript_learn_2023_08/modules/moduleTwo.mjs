import printMyName from './moduleOne.mjs' //импорт функции, имя переменной может не совпадать
//несколько импортов, здесь имена переменных должны совпадать т.к. этот экспорт без default, но их можно перемеиновать через "as", бывает полезно когда имена перемнных уже заняты 
import {
    one as oneRenamed,
    two
} from './moduleOne.mjs'


printMyName() //Arsen

console.log(oneRenamed, two)