/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum(numbers) {
  // TODO: Add your solution here.
  const result = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return result;

  /**************************************************************************************/
}

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

/**************************************************************************************/

/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters(chars) {
  // TODO: Add your solution here.
  let string = "";
  chars.split("").forEach(char => {
    string += char + char;
  });

  return string;
}

/**************************************************************************************/

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify(array) {
  // TODO: Add your solution here.
  if (array.length === 0) return {};
  return array.reverse();
}

/**************************************************************************************/

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave(list1, list2) {
  // TODO: Add your solution here.
  const result = [];

  if (list1.length !== list2.length) return null;

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
}

/**************************************************************************************/

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

/**************************************************************************************/

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
    if (lettersCounted.includes(words[i][0].toLowerCase())) {
      continue;
    } else {
      // find all words with same starting letter as current letter
      count = words.filter(word => {
        return word[0].toLowerCase() === words[i][0].toLowerCase();
      });
      // add letter to array of already counted letters
      lettersCounted.push(words[i][0].toLowerCase());
      // add object property with letter as key, and number of words starting with that letter as the value
      obj[words[i][0].toLowerCase()] = count.length;
      // reset array
      count = [];
    }
  }
  return obj;
}

/**************************************************************************************/

/**
 * @instructions
 * `groupByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys.
 * The key value should be an array with only the words sharing a starting character.
 *
 * @example
 *
 * const input = ['Cat', 'Kitty', 'catzilla', 'fluffykins']
 * const result = groupByFirstLetter(input)
 * // result deep equals:
 * // {
 * //  c: ['cat', 'catzilla'],
 * //  k: ['kitty'],
 * //  f: ['fluffykins']
 * // }
 *
 */

function groupByFirstLetter(words) {
  // TODO: Add your solution here.
  if (
    typeof words !== "object" ||
    words === null ||
    words === undefined ||
    words.length === 0
  ) {
    return {};
  }
  const obj = {};
  const lettersCounted = [];
  let count;

  for (let i = 0; i < words.length; i++) {
    // if letter has already been counted, skip
    if (lettersCounted.includes(words[i][0].toLowerCase())) {
      continue;
    } else {
      // find all words with same starting letter as current letter
      count = words.filter(word => {
        return word[0].toLowerCase() === words[i][0].toLowerCase();
      });
      // add letter to array of already counted letters
      lettersCounted.push(words[i][0].toLowerCase());
      // add object property with letter as key, and number of words starting with that letter as the value
      obj[words[i][0].toLowerCase()] = count;
      // reset array
      count = [];
    }
  }
  return obj;
}
