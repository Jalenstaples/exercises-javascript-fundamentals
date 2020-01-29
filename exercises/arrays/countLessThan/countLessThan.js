function countLessThan(array, num) {
    // This is your job. :)
    let count=0;
  for (let i of array){
  if (i<num){
  count+=1;}
  }
  return count;
  }
  
  if (require.main === module) {
console.log(countLessThan([6,7,9,9,10,11],9));
  }