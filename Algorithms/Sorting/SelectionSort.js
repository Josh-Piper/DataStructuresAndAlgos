// Sort each individual spot in the array to find the minimum element
// I.e [ 5, 2, 3 ]
// The 5 will compare itself to 2 and decide 2 is the minimum for the first index
// Then 2 will compare itself to 3 and decide 2 is still the minimum
// So the first index will perform a swap with index 1 which contains the element 2
// This will occur for every index in the array.
function selectionSort(a) {
  const n = a.length;

  for (let i = 0; i < n; i++) {
    let currentMinimum = i;

    for (let j = i + 1; j < n; j++) {
      const possibleMinimum = j;

      if (a[currentMinimum] > a[possibleMinimum]) {
        currentMinimum = possibleMinimum;
      }
    }

    if (currentMinimum != i) {
      const tempCurrent = a[i];
      const tempNewMinimum = a[currentMinimum];

      a[i] = tempNewMinimum;
      a[currentMinimum] = tempCurrent;
    }
  }

  return a;
}

const testArray = [4, 7, 3, 9];
const result = selectionSort(testArray);

console.log("result", result);
