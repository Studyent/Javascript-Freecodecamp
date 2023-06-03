function dropElements(arr, func) {
    let tkt = arr.slice();
    let i = 0;
    while(func(tkt[0]) != true){
  
    tkt.splice(func[i],1);
    i++;
    }
  
    return tkt;
  }