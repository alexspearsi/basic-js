const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }
  let readyString = '';

  let countsOfChar = 0;
  let checkChar = '';

  for (let i = 0; i < str.length; i++) {
    if (checkChar === '') {
      checkChar += str[i];
      countsOfChar += 1;
    } else if (checkChar === str[i]) {
      countsOfChar += 1;
    } else if (checkChar !== str[i]) {
      readyString += `${countsOfChar}${checkChar}`
      countsOfChar = 1;
      checkChar = str[i];
    }
  }
  readyString += `${countsOfChar}${checkChar}`

  return readyString.replace(/1/g, '')
}

module.exports = {
  encodeLine
};
