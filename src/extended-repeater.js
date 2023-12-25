const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.addition && !options.additionRepeatTimes) {
    let result = '';
    for (let i = 1; i < options.repeatTimes; i++) {
      result += String(str) + options.separator;
    }
    result += String(str);
    return result;
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  let repeatItem = '';
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    repeatItem += String(options.addition) + options.additionSeparator;
  }
  repeatItem += String(options.addition);

  let item = String(str) + repeatItem;
  let result = '';
  for (let i = 1; i < options.repeatTimes; i++) {
    result += item + options.separator;
  }
  result += item;
  return result;
}

module.exports = {
  repeater
};
