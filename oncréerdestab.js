function uniteUnique(arr) {
    let cop = arr.slice();
    let tab = [];
    let siz = [...arguments];
    
    for(let i = 0;i< siz.length;i++){
    const n = siz[i];
    
    for(let j = 0;j<n.length;j++)
    
    if(tab.indexOf(siz[i][j]) == -1){
      tab.push(siz[i][j]);
    }
     
    }
    
    return tab;
    }
    
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));