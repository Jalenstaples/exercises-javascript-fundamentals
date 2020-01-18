/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  // This is your job. :)
 
let count=0;
for (let i in array) {
  
  count+=array[i] }
  return count;
}


if (require.main === module) {
  let array=[5,5,5,5];
  console.log('Running sanity checks for sum:');
console.log(sum(array));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;

