const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let array = [n1,n2,n3];
  let swap,done = false,
      swapped;
  while (!done){
    swapped=0;
    for(i=1;i<array.length;i++){
      if(array[i-1] > array[i]){
        swap = array[i];
        array[i] = array[i-1];
        array[i-1] = swap
        swapped = 1;
      }
      if(swapped == 0){
        done = true
      }
    }
  }
  return {min: array[0], mid: array[1] ,max: array[2]};

}
module.exports = minMedMax

