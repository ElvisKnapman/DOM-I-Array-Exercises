/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum(numbers) {
  // TODO: Add your solution here.
  const result = numbers.reduce((acc, curr) => {
    return acc + curr;
  });

  return result;
}

console.log("16", sum([1, 3, 5, 7])); // --> 16
console.log("0", sum([0])); // --> 0
console.log("10", sum([5, 2, 3])); // --> 10

/*************************************************************************************************/
/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers(numbers) {
  // TODO: Add your solution here.
  const result = numbers.map(number => {
    return number + number;
  });

  return result;
}

console.log("4, 10, 16", doubleNumbers([2, 5, 8])); // --> 4, 10, 16
console.log("20, 30, 76", doubleNumbers([10, 15, 38])); // --> 20, 30, 76

/*************************************************************************************************/
