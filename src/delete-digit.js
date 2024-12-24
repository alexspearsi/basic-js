const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = String(n).split('');
  let arrayOfSum = [];
  
  for (let i = 0; i < array.length; i++) {
    array[i] = undefined
    let sum = array.reduce((acc, item) => {
      if (typeof item === 'string') {
        acc += item;
      }
      return acc;
    }, '')
    arrayOfSum.push(sum)
    array = String(n).split('')
  }
  return Math.max(...arrayOfSum)
}

module.exports = {
  deleteDigit
};
