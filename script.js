let arr = [2,3,4,5,6,73,45,5,6,34,5,3];

for(let i = 0;i<arr.length;i++){
   if(arr[i] % 3 == 0 || arr[i] % 2 != 0){
    console.log(arr[i]);
    continue;
   }
}