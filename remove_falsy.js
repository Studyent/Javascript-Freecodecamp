function bouncer(arr) {

    let y = []; 
    for(let i = 0;i<arr.length;i++){
      
      if(Boolean(arr[i]) == true){
        y.push(arr[i]);
      }
    
    }
    return y;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));