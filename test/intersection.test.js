const { intersection } = require('../functions/intersection');

describe('intersection function tests', () => {

    it('if given two arrays, returns only the numbers common to both arrays', () => {

        const arr1 = [1, 3, 4, 2];
        const arr2 = [3, 4, 7, 2];

        const expected = [3, 4, 2];

        const result = intersection(arr1, arr2);

        expect(result).toEqual(expected);
    });

    it('if given arrays with multiples of each number, returns only one of those numbers', () => {

        const arr1 = [1, 1, 3, 4, 4, 2];
        const arr2 = [3, 4, 4, 7, 7, 2, 2];

        const expected = [3, 4, 2];

        const result = intersection(arr1, arr2);

        expect(result).toEqual(expected);
    });
});
