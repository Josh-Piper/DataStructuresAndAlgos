//
// T(n) = O(n^2)
function insertionSort(a) {
  const n = a.length;

  for (let i = 1; i < n; i++) {
    let j = i;

    while (j > 0 && a[j - 1] > a[j]) {
      const previous = a[j - 1];
      const current = a[j];

      a[j] = previous;
      a[j - 1] = current;

      console.log(previous, current, i, j);
      a;
      j--;
    }
  }

  return a;
}

const ogArray = [5, 7, 6, 3];
console.log("OG array", ogArray);
const result = differentSort(ogArray);

console.log("result", result);
