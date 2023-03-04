const exercise = require('./exercise.js');

test('Check function returns array', () => {
    expect(
        Array.isArray(
            exercise.filterNumberArray([],1,1)
        )
    ).toBe(true);
});

test('Check funcion returns numbers', () => {
    expect(
        exercise.filterNumberArray([1,2,3,4,5,6,7,8,9], 2, 7)
    ).toEqual([2,3,4,5,6,7]);
});

test('Check function returns single number', () => {
    expect(
        exercise.filterNumberArray([1,2,3,4,5,6,7,8,9], 5, 5)
    ).toEqual([5]);
});

test('Check function returns numbers in original order', () => {
    expect(
        exercise.filterNumberArray([16,3,18,22,16,88,12, 2, 11, 13], 10, 20)
    ).toEqual([16,18,16,12,11,13]);
});

test('Check invalid input', () => {
    expect(
        exercise.filterNumberArray([false, 1,2,"three",4,5,6,undefined,8,9], 1, 10)
    ).toEqual([1,2,4,5,6,8,9]);
});

test('Check invalid limits', () => {
    expect(
        exercise.filterNumberArray([1,2,3,4,5,6,7,8,9], 7, 2)
    ).toEqual([1,2,3,4,5,6,7,8,9]);
});