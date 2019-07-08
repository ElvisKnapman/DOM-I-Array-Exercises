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

/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters(chars) {
  // TODO: Add your solution here.
  let string = "";
  chars.forEach(char => {
    string += char + char;
  });

  return string;
}

console.log("aabb", doubleCharacters(["a", "b"])); // --> "aabb"
console.log("ccccccdddddd", doubleCharacters(["ccc", "ddd"])); // --> "ccccccdddddd"

/*************************************************************************************************/

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify(array) {
  // TODO: Add your solution here.
  return array.reverse();
}

console.log("2,1,3", backwardsify([3, 1, 2])); // --> 2,1,3
console.log("sivle", backwardsify(["e", "l", "v,", "i", "s"])); // --> "s", "i", "v", "l", "e"

/*************************************************************************************************/

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave(list1, list2) {
  // TODO: Add your solution here.
  const result = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
}

console.log("a", "b", "c", "d", interleave(["a", "c"], ["b", "d"])); // --> "a", "b", "c", "d"
console.log("1, 5, 3, 7", interleave([1, 3], [5, 7])); // --> 1, 5, 3, 7

/*************************************************************************************************/

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */
function makeRange(count, fillString) {
  // TODO: Add your solution here.
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(fillString);
  }
  return result;
}

/*************************************************************************************************/

/**
 * @instuction
 * `countByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys. The value should be a Number, with the count of words with same starting character.
 *
 * @example
 *
 * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
 * countByFirstLetter(input)
 * // will return:
 * // {
 * //  c: 2, // cat + catzilla
 * //  k: 1, // kitty
 * //  f: 1  // fluffykins
 * // }
 */

function countByFirstLetter(words) {
  // TODO: Add your solution here.
  const obj = {};
  const lettersCounted = [];
  let count;

  for (let i = 0; i < words.length; i++) {
    // if letter has already been counted, skip
    if (lettersCounted.includes(words[i][0])) {
      continue;
    } else {
      // find all words with same starting letter as current letter
      count = words.filter(word => {
        return word[0] === words[i][0];
      });
      // add letter to array of already counted letters
      lettersCounted.push(words[i][0]);
      // add object property with letter as key, and number of words starting with that letter as the value
      obj[words[i][0]] = count.length;
      // reset array
      count = [];
    }
  }
  return obj;
}

console.log(countByFirstLetter(["cat", "kitty", "catzilla", "fluffykins"])); // --> {c: 2, k: 1, f: 1}
console.log(
  countByFirstLetter(["Matt", "Charles", "Mike", "Katie", "Caitlyn", "Conrad"])
); // --> {M: 2, C: 3, K: 1}
