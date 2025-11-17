// Find the second largest unique number
function secondLargestUnique(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    // Skip duplicates of the largest
    if (num === largest) continue;

    if (num > largest) {
      // Update largest and shift old largest down
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      // Valid second largest
      secondLargest = num;
    }
  }

  // No second largest found
  return secondLargest === -Infinity ? -1 : secondLargest;
}

// Examples
console.log(secondLargestUnique([3, 5, 2, 5, 6, 6, 1])); // 5
console.log(secondLargestUnique([7, 7, 7])); // -1
console.log(secondLargestUnique([10, 9, 8])); // 9
console.log(secondLargestUnique([1])); // -1
