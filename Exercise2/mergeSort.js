function mergeSort(array) {
    // Excluded cases
    if(!Array.isArray(array) || isNaN(array[0])) return 'Please pass in an array of numbers';

    if(array.length === 1) return array;

    // If array is bigger than 1, cut it in two
    const pivot = Math.floor(array.length / 2);

    let left = array.slice(0, pivot);
    let right = array.slice(pivot, array.length);

    // Step 1: Sort the left side array
    left = mergeSort(left);
    console.log(left);

    // Step 2: Sort the right side array
    right = mergeSort(right);
    console.log(right);

    // Step 3: Merge
    return merge(left, right);
}      

function merge(left, right) {
    const merged = [];

    while (left.length > 0 && right.length > 0) {   
        
        if (left[0] < right[0]) {
            // add left at the end of the merged array
            merged.push(left[0]);
            // remove left[0] from left
            left.shift();
        } else {
            // add right to the end of the merged array
            merged.push(right[0]);
            // remove right[0]
            right.shift();
        }
    }

    while (right.length > 0) {
        merged.push(right[0]);
        right.shift();
    }

    while (left.length > 0) {
        merged.push(left[0]);
        left.shift();
    }

    return merged;
}


module.exports = mergeSort;