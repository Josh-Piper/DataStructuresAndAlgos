// Dont forget to declare variables before hand, then you aren't reinitialising it.
// Instead just reassigning a new value.

// Easy LeetCode

// Give an array of positive numbers and a positive number of 'k'.
// Find the maximum sum of any contiguous subarray of size 'k'.

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Sliding Window
const max_sub_array_of_size_k = function (k, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let currentMaxSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      if (windowSum > currentMaxSum) {
        currentMaxSum = windowSum;
      }

      // Everytime we reach the contiguous set, then slide it.
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return currentMaxSum;
};

const bruteSumOfArraySize = function (k, arr) {
  // Input: [2, 1, 5, 1, 3, 2], k=3
  // len = 6, we know it has to go until index 3
  // 6 - 3 = 3 since we want it we can go + 1 to the < index
  let currentMaxSum = 0;

  for (let windowStart = 0; windowStart < arr.length + 1 - k; windowStart++) {
    let windowSum = 0;

    for (
      let windowIndex = windowStart;
      windowIndex < windowStart + k;
      windowIndex++
    ) {
      windowSum += arr[windowIndex];
    }

    if (windowSum > currentMaxSum) {
      currentMaxSum = windowSum;
    }
  }

  return currentMaxSum;
};
