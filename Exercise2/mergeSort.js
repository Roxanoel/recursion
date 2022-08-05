function mergeSort(array) {
    // Excluded cases
    if(!Array.isArray(array) || isNaN(array[0])) return 'Please pass in an array of numbers';

    if(array.length === 1) return array;

    // If array is bigger than 1, cut it in two
    const pivot = Math.floor(array.length / 2);
    console.log(pivot);

    let left = array.slice(0, pivot);
    let right = array.slice(pivot, array.length);

    // Step 1: Sort the left side array
    console.log(left);
    left = mergeSort(left);
    console.log(left);
    
    // Step 2: Sort the right side array
    console.log(right);
    right = mergeSort(right);
    console.log(right);

    // Step 3: Merge
    return merge(left, right);
}      

function merge(left, right) {
    const merged = [];

    for (let i = 0; i < right.length; i ++) {   // Because I use floor, if one side is bigger, it will be the right side. 
        // When numbers are odd
        if (!left[i]) {
            merged.push(right[i]);
            break;
        }
        
        if (left[i] <= right[i]) {
            merged.push(left[i]);
            merged.push(right[i]);
        } else {
            merged.push(right[i]);
            merged.push(left[i]);
        }
    }

    return merged;
}


module.exports = mergeSort;