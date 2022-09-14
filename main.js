const { template } = require('@babel/core')
function minMedMax(n1, n2, n3) {
    let array = [n1,n2,n3];
    let swap;

    for(k=1; k<array.length;k++){
      for(i=1; i<array.length; i++){
        if(array[i-1] > array[i]){
          swap = array[i]
          array[i] = array[i-1]
          arra[i-1] = swap
        }
      }
    }
    return {min: array[0], mid: array[1] ,max: array[2]};
}
module.exports = minMedMax