import { returnTheLastElementBahja } from './returnTheLastElementBahja';

describe((`return the last element in an array`), function () {
    it('should return the last number in an array of numbers', function (){
        expect(returnTheLastElementBahja([1, 2, 3])).toBe(3)
    });

    it('should return the last character in an array of characters', function () {
        expect(returnTheLastElementBahja(['x','y','z'])).toBe('z')
    });

    it('should return an error message if an empty array is given', function () {
        expect(returnTheLastElementBahja([])).toBe('Please enter a valid input')
    });

    it('should return an error message if null is given in place of an array', function () {
        expect(returnTheLastElementBahja(null)).toBe('Please enter a valid input')
    });


});