function intersection(arr1, arr2) {
    const results = [];
    arr1.forEach(num => {
        if(arr2.includes(num) && !results.includes(num)) {
            results.push(num);
        }
    });
    return results;
}

module.exports = { intersection };
