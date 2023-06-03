function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  /*
  arr.forEach(function(item){
  item.orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius + item.avgAlt,3)/GM)));
  delete item.avgAlt;
  });

*/

for(let i = 0;i<arr.length;i++){
  if(!arr[i].hasOwnProperty('avgAlt')){
    return undefined;
  }else{
    
    orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt,3)/GM)));
    arr[i].orbitalPeriod = orbitalPeriod;
    delete arr[i].avgAlt;
  }
}

  return arr;
}