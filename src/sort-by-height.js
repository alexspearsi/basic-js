const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArray = arr.filter(item => item !== -1).sort((a, b) => a - b);
  let array = [...arr];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (array[i] === -1) {
      continue;
    } else {
      array[i] = sortedArray[counter]
      counter++
    }
  }
  return array;
}

module.exports = {
  sortByHeight
};
