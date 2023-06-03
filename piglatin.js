function translatePigLatin(str) {

    let tkt = str.slice();
    
    let premier = /^[^aeiou]+/g;
    let found = tkt.match(premier);
    if(found){
      var y = tkt.replace(found,"").concat(found,"ay");
      return y;
    }
    else{
      return tkt.concat("way");
    }
    
      
    }
    
    console.log(translatePigLatin("rhythm"));