const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.array.push('')
      return this;
    }
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.array.length) {
      this.array = []
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.map(item => `( ${item} )`).join('~~')
    this.array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
