/**
 * Given an array of integers, return a new array consisting of only
 * the even integers from the original array.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectEvens([1, 2, 3, 4, 5]); // => [2, 4]
 * selectEvens([10, 2, 19, 10]); // => [10, 2, 10]
 * selectEvens([1, 1, 1, 2]); // => [2]
 * selectEvens([11, 21, 31]); // => []
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all the even numbers in the input array
 */
function selectEvens(array) {
  // This is your job. :)
let count=[];
for(let i of array){
if(i%2===0){
count.push(i);}
}
return count;
}

if (require.main === module) {
  console.log('Running sanity checks for selectEvens:');
console.log(selectEvens([1,5,6,8,4,1,2]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectEvens;

