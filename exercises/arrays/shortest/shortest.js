/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
let shortest=array[0];
for (let i of array){
if (i.length<shortest.length)
shotrtest=i
}
return shortest
}
if (require.main === module) {
  console.log('Running sanity checks for shortest:');
console.log(shortest(['hi','yes', 'cool']));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortest;
