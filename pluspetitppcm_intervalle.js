function smallestCommons(arr) {

    function pgcd(n1,n2){
    //n1 = 18, n2 = 23
    
    let reste = 1;
    
    /*23 = 18*1 + 5
    18 = 3*5 + 3*/
    
    
    while(reste != 0){
    
    reste = n1 % n2;
    n1 = n2;
    n2 = reste;
    
    }
    return n1;
    }
    
    
    function ppcm(a,b){
    
    let result = ((a*b))/(pgcd(a,b));
    
    
    return result;
    }
    
    /*
    
    Problème: trouver le plus petit multiple commun de deux nombres,
    qui puisse diviser tous les nombres entre eux.
    
     */
    
    // check si arr[0] est supérieur à arr[1] est vice-versa.
    if(arr[0] > arr[1]){
      let temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
     }
    
    // cherche un multiple commun
    
    /*
    Le PGCD est égale au dernier reste non nul
    23 / 18
    n2 = 
    23 = 18*1 + 5
    18 = 3*5 + 3
    reste = n1 % n2;
    n1 = n2;
    n2 = reste;
    reste = n1 % n2;
    
    5 =  3*1 + 2; 
    3 = 1*2 + 1;
    2 = 1*2 + 0;
    
    Algo possible:
    
    soient: n1 et n2, deux nombres inclus dans N,
    
    calculer n1 % n2 et se servir du reste pour calculer
    n2 % reste
    et stoquer le nouveau n2 dans une var temp
    pour effectuer chaque nouveau calcul
    
    */
    
    
    
    
    let x;
    x = ch(arr[0],arr[1]);
    
      return x;
    
    
    function ch(a,b){
    
    let result = a;
    
    for(let i = a + 1 ;i<=b;i++){
    
    result = ppcm(result,i);
    
    }
    return result;
    }
    
    
    
    
    
    
    
    
    }