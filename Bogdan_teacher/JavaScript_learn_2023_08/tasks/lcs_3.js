'use strict'

const readline = require('readline');
const Table = require('cli-table');
const crypto = require('crypto');

const moves = process.argv.slice(2)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Проверка на корректность ходов
const checkMoves = array => {
    if (array.length % 2 === 0 || array.length < 2) {
        console.log('Пожалуйста, напишите три или более количество нечетных ходов, а также избегайте потоврение одинаковых ходов')
        process.exit();

    } else if (array.length !== new Set(array).size) {
        console.log('Пожалуйста, избегайте потоврение одинаковых ходов')

        function findDuplicateElements(array) {
            const uniqueElements = new Set();
            const duplicates = new Set();

            array.forEach(element => {
                if (uniqueElements.has(element)) {
                    duplicates.add(element);
                } else {
                    uniqueElements.add(element);
                }
            });

            return Array.from(duplicates); // Преобразуем Set обратно в массив
        }
        const duplicateElements = findDuplicateElements(array).join(' ')

        console.log('Ваши одинаковые ходы: ' + duplicateElements)
        process.exit();
    }
}

checkMoves(moves)

//Ход ИИ
const getRandomIndex = array => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}
const computerIndex = getRandomIndex(moves) //получаем индекс массива компьютера

// Генерация криптографически стойкого ключа длиной 256 бит
const getRandomKey = () => crypto.randomBytes(32).toString('hex').toUpperCase()
const key = getRandomKey()

// Создание HMAC с использованием SHA-256
const createHmac = (key, moveComputer) => crypto.createHmac('sha256', key).update(moveComputer).digest('hex').toUpperCase()
const hmac = createHmac(key, moves[computerIndex])

//Генерация списка(меню)
const list = (array, hmac) => {
    console.log(`HMAC: ${hmac}`)
    console.log('Available moves:')

    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`)
    }

    console.log('0 - exit')
    console.log('? - help')
}

//Обработка ответа(хода) игрока
const playerMove = (answer, array, computerIndex) => {
    const playerIndex = parseInt(answer) - 1 //получаем индекс массива игрока

    //? Correct answer
    if (playerIndex < array.length && playerIndex >= 0) {
        console.log(`Your move: ${array[playerIndex]}`) // move player
        console.log(`Computer move: ${array[computerIndex]}`) // move computer
        rl.close()

        //Определяет результат игры
        const middleIndex = Math.floor(array.length / 2) + 1 //средний индекс зависящий от кол-ва ходов
        const arrayWin = array
            .slice(playerIndex + 1, playerIndex + middleIndex)
            .concat(array.slice(0, Math.max(0, middleIndex - (array.length - playerIndex))))

        if (array[computerIndex] === array[playerIndex]) {
            console.log('Draw')
            console.log(`HMAC key: ${key}`)

        } else if (arrayWin.includes(array[computerIndex])) {
            console.log('You Win!')
            console.log(`HMAC key: ${key}`)

        } else {
            console.log('You Lose')
            console.log(`HMAC key: ${key}`)
        }

        //? Exit
    } else if (playerIndex === -1) {
        console.log('Exit')
        rl.close()

        //? Help
    } else if (answer === '?') {
        // Создаем новую таблицу
        const table = new Table({});

        // Создаем заголовок таблицы
        const headerRow = ['v User\\PC >'].concat(array);
        table.push(headerRow);

        // Заполняем таблицу результатами
        array.forEach((element1, index1) => {
            const row = [element1];
            array.forEach((element2, index2) => {
                // Здесь определите результат для комбинации element1 и element2
                const result = determineWinner(index1, index2);
                row.push(result);
            });
            table.push(row);
        });

        // Выводим таблицу в консоль
        console.log(table.toString());
        rl.question('Enter your move: ', answer => playerMove(answer, moves, computerIndex))

        // Функция для определения победителя (пример)
        function determineWinner(index1, index2) {
            // Здесь реализуйте логику определения победителя
            // Верните 'Win' для выигрыша игрока 1, 'Lose' для проигрыша и 'Draw' для ничьи.

            const middleIndex = Math.floor(array.length / 2) + 1 //средний индекс зависящий от кол-ва ходов
            const arrayWin = array
                .slice(index1 + 1, index1 + middleIndex)
                .concat(array.slice(0, Math.max(0, middleIndex - (array.length - index1))))

            if (array[index2] === array[index1]) {
                return 'Draw'

            } else if (arrayWin.includes(array[index2])) {
                return 'Win'

            } else {
                return 'Lose'
            }
        }

        //? Error
    } else {
        console.log('Пожалуйста, введите корректный номер хода')
        rl.question('Enter your move: ', answer => playerMove(answer, moves, computerIndex))
    }
}


list(moves, hmac)

rl.question('Enter your move: ', answer => playerMove(answer, moves, computerIndex))





