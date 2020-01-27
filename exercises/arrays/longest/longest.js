/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  let longest=array[0];
  for (let i of array){
  if (i.length>longest.length)
  longest=i
}
return longest
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(['hi','yes', 'cool']));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
