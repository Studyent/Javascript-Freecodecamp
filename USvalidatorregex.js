function telephoneCheck(str) {
  
    let tes;
    if(str[0] == "1"){
    tes = str.slice(1);
    }
    else{
    tes = str.slice();
    }
   
    
    
    let trick = /\D/g;
    let x = tes.replace(trick,"");
    if(x.length < 10 || x.length > 11){
      return false;
    }
    
    let regac = /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/gm; 
    
    
            
   if(!(str.match(regac))){
     return false;
   }
     return true;
    
  
  }
  
  console.log(telephoneCheck("1 555-555-5555"));