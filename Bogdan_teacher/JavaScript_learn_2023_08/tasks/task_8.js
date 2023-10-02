'use strict'

//? Задача №8
/* Создайте функцию, которая переводит заданную строку ДНК в РНК.
    Например: "GCAT" => "GCAU"

Входная строка может быть произвольной длины - в частности, она может быть пустой.Все входные данные гарантированно будут действительными, т.е.каждая входная строка всегда будет состоять только из 'G', 'C', 'A' и / или 'T'. */

const DNAtoRNA = dna => {

    const array = dna.split('')

    const newArray = array.map(el => {
        if (el === 'T') {
            return 'U'
        }
        return el
    })

    const rna = newArray.join('')

    console.log(rna)
}

DNAtoRNA('GCAT')
DNAtoRNA('GCATTTTTT')
DNAtoRNA('GAAAATTT')
DNAtoRNA('GCCCCCCCC')











// Ппц, оказалось все куда проще :)

//*        function DNAtoRNA(dna) {
//*            return dna.replace(/T/g, 'U');
//*        }