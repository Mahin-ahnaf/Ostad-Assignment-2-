function filterOddNumbers(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(filterOddNumbers([10, 15, 20, 25])); // Output: [15, 25]
console.log(filterOddNumbers([2, 4, 6, 8])); // Output: []
console.log(filterOddNumbers([-1, -2, -3, -4])); // Output: [-1, -3]