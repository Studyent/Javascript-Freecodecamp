function pairElement(str) {

    let tab = [];
    
    
    
    let v = function (char){
    
    switch(char){
    
    case 'A':
    return ["A","T"];
    case 'C':
    return ["C","G"];
    case 'G':
    return ["G","C"];
    case 'T':
    return ["T","A"];
    
    default:
    "none";
    
    }
    }
    
    for(let i = 0;i<str.length;i++){
    
    tab.push(v(str[i]));
    
    }
    
      return tab;
    }