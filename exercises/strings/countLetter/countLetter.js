/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  let count=0
  for (i in string);{
  if (i==letter);{
  count+=1 }
  }
  return count;
  


  
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');
console.log(countLetter('Jalen', 'a'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;
