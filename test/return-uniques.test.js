const { returnUniques } = require('../functions/return-uniques');

describe('returns unique values function', () => {

    it('if given an array of duplicate values, returns a new array with only unique values', () => {

        const arr = [1, 1, 2, 3, 4, 4, 5];

        const expected = [1, 2, 3, 4, 5];

        const result = returnUniques(arr);

        expect(result).toEqual(expected);
    });
});
