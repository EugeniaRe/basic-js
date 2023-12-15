const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let resultString = '';
  let i = email.length - 1;
  while (email[i] !== '@') {
    resultString += email[i];
    i--;
  }
  return resultString.split('').reverse().join('');
}


module.exports = {
  getEmailDomain
};
