const exercise = require('./exercise.js');

test('Check function returns array', () => {
    expect(
        Array.isArray(
            exercise.filterNumberArray([],1,1)
        )
    ).toBe(true);
});