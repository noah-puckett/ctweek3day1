function multiplesOfN(int) {
    const arr = [];
    const upper = 101;
    for(let i = 0; i < upper; i++) {
        if(i % int === 0) {
            arr.push(i);
        }
    }
    return arr;
}

module.exports = { multiplesOfN };
