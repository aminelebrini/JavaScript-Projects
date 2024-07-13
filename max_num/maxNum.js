const num = [1,2,3,8,5,6,7];

document.getElementById('pr').innerHTML = "[" + num + "]";

const res = Math.max(...num)

document.getElementById('res').innerHTML = res;