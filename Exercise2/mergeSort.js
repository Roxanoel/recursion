function mergeSort(array) {
    // Excluded cases
    if(!Array.isArray(array) || isNaN(array[0])) return 'Please pass in an array of numbers';

    if(array.length === 1) return array;
}

module.exports = mergeSort;