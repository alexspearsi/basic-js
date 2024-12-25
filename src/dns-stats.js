const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let array = domains.map(item => item.split('.').reverse());

  for (let item of array) {
    item.forEach((element, index, array) => {
      if (index === 0) {
        if (!Object.keys(obj).includes(`.${element}`)) {
          obj[`.${element}`] = 1;
        } else {
          obj[`.${element}`] += 1;
        }
      }

      if (index === 1) {
        if (!Object.keys(obj).includes(`.${array[0]}.${array[1]}`)) {
          obj[`.${array[0]}.${array[1]}`] = 1;
        } else {
          obj[`.${array[0]}.${array[1]}`] += 1;
        }
      }

      if (index === 2) {
        if (!Object.keys(obj).includes(`.${array[0]}.${array[1]}.${array[2]}`)) {
          obj[`.${array[0]}.${array[1]}.${array[2]}`] = 1;
        } else {
          obj[`.${array[0]}.${array[1]}.${array[2]}`] += 1;
        }
      }


    })
  }
  return obj;
}

module.exports = {
  getDNSStats
};
