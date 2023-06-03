function rot13(str) {

  let chaine = "";
  let ab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mreg = /[^a-zA-Z-0-9]/g;
  
  let x;
  for(let i = 0;i<str.length;i++){
    let m = str[i].match(mreg);
    for(let j = 0;j<ab.length;j++){
      if(m){
        chaine += str[i];
        break;
      }
    if(str[i] == " "){
      chaine += " ";
      break;
    }
    else{
      if(str[i] == ab[j]){
        x = ((j + 13) % ab.length);
        chaine += ab[x];
      }
    }
    
    }
    
  }
  return chaine;
}