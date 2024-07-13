let arr = [1,2,4,16,20,40];
let pair = [];

for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
        pair.push(arr[index]);
       
    }
}
document.getElementById('res').innerHTML= pair.join(',');