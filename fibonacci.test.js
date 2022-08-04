const fibonacci = require('./fibonacci');

test('Passing in 1 returns [0]', () => {
    expect(fibonacci(1)).toStrictEqual([0]);
});
test('Returns correct fibonacci sequence', () => {
    expect(fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(5)).toStrictEqual([0, 1, 1, 2, 3]);
});
test('Returns "Invalid parameter" if non-number is passed in', () => {
    expect(fibonacci('a')).toBe("Invalid parameter");
});
test('Returns "Invalid parameter" if negative number is passed in', () => {
    expect(fibonacci(-8)).toBe("Invalid parameter");
});
test('Returns "Invalid parameter" if 0 is passed in', () => {
    expect(fibonacci(0)).toBe("Invalid parameter");
});
