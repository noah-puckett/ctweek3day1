const { multiplesOfN } = require('../functions/multiples-of-n');

describe('MATH', () => {

    it('if given a number, returns an array of multiples of that number(I do not understand this at all but ok)', () => {
        const num = 5;

        const expected = [0,
            5,
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            65,
            70,
            75,
            80,
            85,
            90,
            95,
            100];

        const result = multiplesOfN(num);

        expect(result).toEqual(expected);
    });

});
