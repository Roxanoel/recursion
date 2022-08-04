const mergeSort = require('./mergeSort');

test('Providing non-array value returns "Please pass in an array"', () => {
    expect(mergeSort('a')).toBe('Please pass in an array');
});

test('Passing in an array of non-numbers returns "Values in the provided array need to be numbers', () => {
    expect(mergeSort['a', 'b']).toBe('Values in the provided array need to be numbers');
});

test('Passing in an array with only one member returns the same array', () => {
    expect(mergeSort([1])).toStrictEqual([1]);
});

test('Even array w/o duplicates gets sorted correctly', () => {
    expect(mergeSort([3, 2, 1, 7])).toStrictEqual([1, 2, 3, 7]);
});

test('Odd array w/o duplicates gets sorted correctly', () => {
    expect(mergeSort([3, 2, 1, 7, 5])).toStrictEqual([1, 2, 3, 5, 7]);
});

test('Array with duplicates gets sorted correctly', () => {
    expect(mergeSort(3, 2, 1, 3, 7, 5)).toStrictEqual([1, 2, 3, 3, 5, 7]);
});