function lcs(strings) { // 'ABCFG' 'DRTYABC' 'CVBABCGHJ' //начальные данные
    let shortest = strings.reduce((a, b) => a.length <= b.length ? a : b); // возвращает 'ABCFG' 
    let maxlen = shortest.length; // длина 'ABCFG' = 5 // maxlen = 5
    for (let len = maxlen; len >= 0; len--) { // (5 >= 0, 5--) и т.д.
        for (let start = 0; start <= maxlen - len; start++) { // (0 <= 0 (5 - 5)) и т.д.
            let substr = shortest.substring(start, start + len); // (0, 5) (0, 4) (1, 5) (0, 3)
            if (strings.every(elem => elem.includes(substr))) { return substr; }
        }
    }
    return '';
}

const strings = process.argv.slice(2)

strings.length < 1 ? console.log('') : console.log(lcs(strings))
