let q = w => (e => {
    for (let y = e.length; y > 0; y--) {
        for (let u = 0; u <= e.length - y; u++) {
            let i = e.substring(u, u + y);
            if (w.every(o => o.includes(i))) return i;
        }
    }
    return '';
})(w.reduce((a, b) => a.length <= b.length ? a : b));

let w = process.argv.slice(2);
console.log(w.length < 1 ? '' : q(w));