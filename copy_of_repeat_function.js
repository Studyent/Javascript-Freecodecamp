function repeatStringNumTimes(str, num) {
  let string = "";
  let i = 0;
  if(num <= 0){
    return string;
  }
  
  else{
    
      while(i<num){
      string += str.slice();
      i++;
      }
    return string;
  }
}

console.log(repeatStringNumTimes("abc", 3));