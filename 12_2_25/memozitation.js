function fibonacci(n, memo = {}) {
    // Check if the result is already cached
    if (n in memo) {
        return memo[n];
    }

    // Base cases
    if (n <= 1) {
        return n;
    }

    // Calculate and store the result in the memo
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(10)); // Output: 55
