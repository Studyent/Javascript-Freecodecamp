function addTogether() {
  
 
   

    if(arguments.length == 1 && typeof(arguments[0]) == 'number' ){
     let x = arguments[0];
     return function(second){
       if(typeof(second) == 'number'){
         return x + second;
       }
       return undefined;
     }
   }

if(arguments.length < 2){
  return undefined;
}

if(typeof(arguments[0]) != 'number' || typeof(arguments[1]) != 'number'){
  return undefined;
}
 





return arguments[0] + arguments[1];

}