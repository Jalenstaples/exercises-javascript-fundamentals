/**
 * Given an array of numbers, returns a new array consisting of every
 * number in the input array strictly greater than the mean.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectAboveMean([1, 1, 1]); // => []
 * selectAboveMean([-10, -10, 0, 10]); // => [0, 10]
 * selectAboveMean([1, 2, 3, 4, 5]); // => [4, 5]
 * selectAboveMean([100, 0, 100, 200, 100, 0]); // => [100, 100, 200, 100]
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all numbers in the input array
 *   greater than the mean.
 */
function selectAboveMean(array) {
let greaterthanaverage=[];
let count=0;
for (let i of array){
  count+=i;
} let avg=count/array.length;



for (let i of array) {
  if (i>avg){
  greaterthanaverage.push(i);}
}
return greaterthanaverage;
}




if (require.main === module) {
console.log('Running sanity checks for selectAboveMean:');
console.log(selectAboveMean([11,12,13,14,15,16]));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectAboveMean;
