function fibonacci(length) {
    // Cases to exclude
    if (length < 1 || isNaN(length)) return "Invalid parameter";
    
    const results = [0];  // Initializing the array

    if (length === 1) return results; // Base case

    for(let i = 1; i < length; i++) {    // Starts from 1 to avoid reference to a "-1" index
        if (i === 1 || i === 2) {
            results.push(1);
        } else {
            results.push(results[i-2] + results[i-1]);
        }
    }

    return results;
}

module.exports = fibonacci;