function sumAll(arr) {

let maxn = arr[0]>arr[1]?arr[0]:arr[1];
let minn = arr[0]<arr[1]?arr[0]:arr[1];
let sum = 0;

for(let i = minn;i<=maxn;i++){

sum+=i;

} 


  return sum;
}

console.log(sumAll([5, 10]));