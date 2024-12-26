const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let checks = [
    '--double-next',
    '--double-prev',
    '--discard-next',
    '--discard-prev'
  ]
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let array = [...arr];


  for (let i = 0; i < array.length; i++) {
    if (!checks.includes(array[i])) {
      array[i] = array[i]
    }

    if (array[i] === '--double-next') {
      array[i] = array[i + 1]
    }

    if (array[i] === '--discard-prev') {
      array[i - 1] = undefined;
      array[i] = undefined;
    }

    if (array[i] === '--double-prev') {
      array[i] = array[i - 1]
    }

    if (array[i] === '--discard-next') {
      array[i] = undefined;
      array[i + 1] = undefined;
    }
  }
  console.log(arr);
  return array.filter(item => Boolean(item));
}

module.exports = {
  transform
};
