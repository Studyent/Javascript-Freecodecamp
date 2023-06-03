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
function pgcd(n1,n2){
//n1 = 18, n2 = 23

let reste;
let temp = 0;

/*23 = 18*1 + 5
18 = 3*5 + 3*/


while(reste != 0){

reste = n1 % n2;


n1 = n2;


n2 = reste;
reste = n1 % n2; 

}
return n2;
}