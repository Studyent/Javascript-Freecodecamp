function nbmot(str){
    let mot = 0;
  for(let i = 0;i<=str.length;i++){
  
    if(str[i] == " "){
      mot += 1;
    }
  
  } 
  return mot;
    }
  
  
  function binaryAgent(str) {
    let tkt = str.slice();
    let tab;
    let tableau = [];
    
    
    tab = tkt.split(" ");
    for(let i = 0;i<tab.length;i++){
      tableau.push(String.fromCharCode(parseInt(tab[i],2)));
    }
    return tableau.join("");
  
  }