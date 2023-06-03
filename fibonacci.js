function sumFibs(num) {

    let sum = 1;
    let temp = 1;
    let n1 = 1;
    let n2 = 1;
    
    
    while(n2<=num){
    if(n2 % 2 == 1){
      sum += n2;
    console.log(sum);
    
    }
    
    temp = n1;
    n1 = n2;
    n2 = temp + n1;
    }
    
    
      return sum;
    }