// Swap each item with the next item if the current item is greater than the next item.
// Do this for array length - 1 since this is the amount of swaps
// to take the last element to the first if the last element is the smallest
// item in the array.
// T(n) = O(n^2)
function bubbleSort(a) {
  const n = a.length;

  // A maximum of length - 1 is needed to sort completely
  // I.e. the number of swaps to take 3 to 5 is 3 hops
  // [5, 7, 6, 3]
  // 3 swaps with 6, 3 swaps with 7 then 3 would swap with 5
  for (let i = 1; i < n; i++) {
    // Then swap every element sorting it against its neighbor
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        const current = a[j];
        const next = a[j + 1];
        a[j] = next;
        a[j + 1] = current;

        console.log("Performing swap", current, next, i, j);
      }
    }
  }
  return a;
}

console.log(bubbleSort([5, 7, 6, 3]));
