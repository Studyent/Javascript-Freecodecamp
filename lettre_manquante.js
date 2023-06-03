function fearNotLetter(tab) {


    for(let i = 0,j = 1;j<tab.length;i++,j++){
    
      if(tab[j].charCodeAt(0) - tab[i].charCodeAt(0) !== 1){
        return String.fromCharCode(tab[i].charCodeAt(0) + 1);
      }
    }
    
      return undefined;
    }
    
    console.log(fearNotLetter("abce"));