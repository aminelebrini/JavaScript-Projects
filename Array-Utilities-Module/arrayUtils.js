function max(arr){
    let x = Math.max(...arr);
    console.log(x);
}

function min(arr){
    let x = Math.min(...arr);
    console.log(x);
}

function sum(arr){
    let sum = 0;
   for(let x = 0; x < arr.length; x++)
   {
    
    sum += arr[x]; 
   }
   console.log(sum);
}
function average(arr){
    let av;
    let sum = 0;
    for(let x = 0; x < arr.length; x++){
        sum += arr[x];
        av = sum/ arr.length;
    }
    console.log(av);
}

export {max, min, sum, average};