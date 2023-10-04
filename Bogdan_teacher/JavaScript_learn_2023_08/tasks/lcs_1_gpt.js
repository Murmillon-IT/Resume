// Функция для нахождения самой длинной общей подстроки между двумя строками
function longestCommonSubstring(str1, str2) {
    const matrix = Array.from({ length: str1.length + 1 }, () =>
        Array(str2.length + 1).fill(0)
    );
    let maxLength = 0;
    let endIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                if (matrix[i][j] > maxLength) {
                    maxLength = matrix[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }

    if (maxLength === 0) {
        return ""; // Если нет общей подстроки
    }

    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

// Ваш массив строк
const inputStrings = process.argv.slice(2);

if (inputStrings.length < 2) {
    console.log(inputStrings[0]);
} else {
    // Находим общую подстроку между первыми двумя строками
    let commonSubstring = longestCommonSubstring(inputStrings[0], inputStrings[1]);

    // Затем сравниваем ее с остальными строками
    for (let i = 2; i < inputStrings.length; i++) {
        commonSubstring = longestCommonSubstring(commonSubstring, inputStrings[i]);
    }

    console.log(commonSubstring);
}