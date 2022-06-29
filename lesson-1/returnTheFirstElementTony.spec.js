import { returnTheFirstElementTony } from './returnTheFirstElementTony';

describe((`return the first element of an array`), () => {
    it(`should return the first element of an array if its a number`, () => {
        expect(returnTheFirstElementTony([1, 2, 3])).toBe(1);
    });
    it(`should return the first element of an array if its a string`, () => {
        expect(returnTheFirstElementTony(['1', '2', '3'])).toBe('1');
    });
    it(`should return an error message if the value is less than 1`, () => {
        expect(returnTheFirstElementTony([])).toBe('Please enter a valid input');
    });
    it(`should return an error message if the value passed in is undefined`, () => {
        expect(returnTheFirstElementTony(undefined)).toBe('Please enter a valid input');
    });
    it(`should return an error message if the value passed in is null`, () => {
        expect(returnTheFirstElementTony(null)).toBe('Please enter a valid input');
    });
})