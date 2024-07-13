const num1 =window.prompt("enter num1 : ");
const num2 =window.prompt("enter num2 : ");

if(num1 === 100 || num2 ===100)
{
    document.getElementById('res').innerHTML = true;
}
else if(num1 + num2){
    document.getElementById('res').innerHTML = true;
}
else{
    document.getElementById('res').innerHTML = false;
}