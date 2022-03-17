// When working /w arrays or linked lists we might be tasked
// to find a subarray or sublist.

// Given an array, find the average of all subarrays of 'K' contigous
// elements in it
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// index 0 - 4 = (1 + 3 + 2 + 6 + - 1)  / 5 = 2.2
// index 1 - 5 = (3 + 2 + 6 + - 1 + 4) / 5 = 2.8

// A brute force solution
function findAverageOfSubArrays(K, arr) {
  const result = [];

  for (let i = 0; i < arr.length - K + 1; i++) {
    // Get sum of next 'k' elements.
    let sum = 0.0;

    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }

    result.push(sum / K);
  }

  return result;
}

const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];

const result = findAverageOfSubArrays(5, array);
console.log("Result", result);

// A sliding window solution
function slidingWindowFindAverageOfSubArrays(K, arr) {
  const result = [];

  let windowSum = 0.0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we dont need to slide if we've not hit the required window size of 'k'

    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead (needed for the above statement)
    }
  }

  return result;
}

const slidingWindowResult = slidingWindowFindAverageOfSubArrays(5, array);
console.log("Sliding Window Result", slidingWindowResult);
