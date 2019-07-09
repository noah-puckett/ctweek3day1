function returnUniques(arr) {
    const results = [];
    for(let i = 0; i < arr.length; i++) {
        if(!results.includes(arr[i])) {
            results.push(arr[i]);
        }
    }
    return results;
}

module.exports = { returnUniques };
