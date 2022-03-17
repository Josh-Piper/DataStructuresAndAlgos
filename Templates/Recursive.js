// All recursive algorithms follow a similar template
// Break a big problem into smaller ones and solve the smaller problems

/**
 * identifier(input) {
 *   if (isSmallEnough(input)) {
 *     solve the problem
 *   } else {
 *     break input into smaller inputs
 *     solution1 = identifier(input1)
 *     solution2 = identifier(input2)
 *
 *     // figure out solution to this problem from solution1, solution2, ...
 *     return solution;
 *   }
 * }
 */

// Iteration solutions keep repeating until a task is done.
// Iterative solutions keep control local to loop.
// Good recursive solutions may be more difficult to design and test.

function iterativeSum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function recursiveSum(n) {
  // Base case
  if (n === 0) {
    return 0;
  }

  // else
  return n + recursiveSum(n - 1);
}
