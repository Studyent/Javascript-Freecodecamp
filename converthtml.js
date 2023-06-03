function convertHTML(str) {

    let reg = /&|<|>|"|'/g;
    
      let func = function(char){
      switch(char){
    
        case '&':
        return "&amp;";
        case '<':
        return "&lt;";
        case '>':
        return "&gt;";
        case '"':
        return "&quot;";
        case "'":
        return "&apos;";
    
      default:
    
        }
      }
    
    for(let i = 0;i<str.length;i++){
    
    if(reg.test(str[i])){
      str = str.replace(str[i],func(str[i]));
    }
    
    }
    return str;
    
    }