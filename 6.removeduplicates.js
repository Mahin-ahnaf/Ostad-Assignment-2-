function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); 
console.log(removeDuplicates([1, 1, 1, 1])); 
console.log(removeDuplicates([])); 