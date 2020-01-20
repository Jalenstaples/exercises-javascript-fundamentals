/**
 * Given an array of integers, returns the count of odd integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Odd_number
 *
 * @example
 * countOdds([1, 2, 3, 4, 5, 19]); // => 4
 * countOdds([10, 10, 10]); // => 0
 * countOdds([1, 1, 1, 2]); // => 3
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countOdds(array) {
  // This is your job. :)
let count=0;
for (let i of array){
if (i%2>0){
  count+=1;}
}
return count;
}


if (require.main === module) {
  console.log('Running sanity checks for countOdds:');
  console.log(countOdds([1,4,7,8,6,12]));
}

module.exports = countOdds;
