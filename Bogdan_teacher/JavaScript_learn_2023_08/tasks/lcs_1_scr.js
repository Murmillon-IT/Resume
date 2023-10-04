function lcs(strings) { // 'ABC' 'DRTY' 'CVBABC' //начальные данные
    let shortest = strings.reduce((a, b) => a.length <= b.length ? a : b); // возвращает 'ABC' 
    let maxlen = shortest.length; // длина 'ABC' = 3 // maxlen = 3
    for (let len = maxlen; len >= 0; len--) { // (3 >= 0, 3--)
        for (let start = 0; start <= maxlen - len; start++) { // (0 <= 3 - 3)
            let substr = shortest.substring(start, start + len);
            if (strings.every(elem => ~elem.indexOf(substr))) { return substr; }
        }
    }
    return '';
}

if (process.argv.length < 3)
    console.log('');
else
    console.log(lcs(process.argv.slice(2)));