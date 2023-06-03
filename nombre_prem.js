function premier(nm){

    for(let i = 2;i<nm;i++){
      if((nm % i) == 0){
        return false;
      }
    }
    return true;
    }
    
    function sumPrimes(num) {
    
    
    let sum = 0;
    for(let i = 2;i<= num;i++){
      console.log("i:" + i);
    if(premier(i)){
    sum+= i;
    console.log("sum:" + sum);
      }
    }
    
    
      return sum;
    }