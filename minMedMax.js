const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {

  let number =[n1,n2,n3];

  if(n1<n3 && n1<n2 || n1 == n2){
    if(n2<n3){
      number=[n1,n2,n3];
    }else{
      number=[n1,n3,n2];
    }
  }else if(n2<n1 && n2<n3){
    if(n1<n3){
      number=[n2,n1,n3];
    }else{
      number=[n2,n3,n1];
    }
  }else{
    if(n2<n1){
      number=[n3,n2,n1];
    }else{
      number=[n3,n1,n2]
    }
  }
  return {
    min: number[0], mid: number[1], max: number[2]
  };
}
module.exports = minMedMax

