/*

Suppression d'élements d'un tableau en fonction du nombre d'arguments et de leur valeur.

*/

function destroyer(arr,a,b) {

    let newest = arr.slice();
      
    for(let i = 0;i<arguments.length;i++){
    
    newest = newest.filter(item => item !== arguments[i]);
    
    
    }
      
    
    
    return newest;
    
    
      
    }
    
    console.log(destroyer(["tree","hamburger", 53], "tree", 53));