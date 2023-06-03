function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g,"");
    str = str.toLowerCase();
    for(let i = 0,j = str.length-1; i<j;i++,j--){
    
      if(str[i] != str[j]){
        return false;
      }
    }
    return true;
    
      
    }