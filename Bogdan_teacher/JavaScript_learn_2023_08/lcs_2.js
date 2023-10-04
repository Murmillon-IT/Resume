const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function calculateSHA3_256(filePath) {
    const hash = crypto.createHash('sha3-256');
    const input = fs.createReadStream(filePath);

    return new Promise((resolve, reject) => {
        input.on('data', (chunk) => {
            hash.update(chunk);
        });

        input.on('end', () => {
            const sha3_256Hash = hash.digest('hex');
            resolve(sha3_256Hash);
        });

        input.on('error', (err) => {
            reject(err);
        });
    });
}

async function calculateHashesForFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    const hashes = [];

    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        if (fs.statSync(filePath).isFile()) {
            const sha3_256Hash = await calculateSHA3_256(filePath);
            hashes.push(sha3_256Hash);
        }
    }

    // Отсортируем хеши по возрастанию
    hashes.sort();

    // Склеим хеши без сепаратора
    const concatenatedHash = hashes.join('');

    return concatenatedHash;
}

function calculateSHA3_256FromString(inputString) {
    const hash = crypto.createHash('sha3-256');
    hash.update(inputString);
    return hash.digest('hex');
}

const directoryPath = 'D:/Programs/GitHub/resume/Bogdan_teacher/JavaScript_learn_2023_08/tasks/lcs_2/';
const email = 'a.azizkhanov@yandex.ru';

calculateHashesForFiles(directoryPath)
    .then((concatenatedHash) => {
        const resultWithEmail = concatenatedHash + email.toLowerCase();
        const sha3_256HashOfString = calculateSHA3_256FromString(resultWithEmail);
        console.log('SHA3-256 хеш от полученной строки:', sha3_256HashOfString);
    })
    .catch((error) => {
        console.error('Ошибка при вычислении хэшей и склеивании:', error);
    });
