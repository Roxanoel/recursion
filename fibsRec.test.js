const fibsRec = require('./fibsRec');

test('Passing in 1 returns [0]', () => {
    expect(fibsRec(1)).toStrictEqual([0]);
});
test('Passing in 2 returns [0, 1]', () => {
    expect(fibsRec(2)).toStrictEqual([0, 1]);
});
test('Passing in 3 returns [0, 1, 1]', () => {
    expect(fibsRec(3).toBe([0, 1, 1]));
});
test('Returns correct fibonacci sequence', () => {
    expect(fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibsRec(5)).toStrictEqual([0, 1, 1, 2, 3]);
});
test('Returns "Invalid parameter" if non-number is passed in', () => {
    expect(fibsRec('a')).toBe("Invalid parameter");
});
test('Returns "Invalid parameter" if negative number is passed in', () => {
    expect(fibsRec(-8)).toBe("Invalid parameter");
});
test('Returns "Invalid parameter" if 0 is passed in', () => {
    expect(fibsRec(0)).toBe("Invalid parameter");
});