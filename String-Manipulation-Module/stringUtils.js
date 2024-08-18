function capitalize(str){
    if(str.length=== 0){
        return str;
    }
        return str.charAt(0).toUpperCase()+str.slice(1);
    
    
}

function reverse(str){
    let element = "";
    for (let index = str.length - 1; index >=0; index--) {
         element += str[index];
        
    }
    return element;
}

function toLowerCase(str){
    let x = "";
    for(let i = 0; i< str.length; i++)
    {
         x += str.charAt(i).toLowerCase();    
    }
    return x;
    
}

function toUpperCase(str){
    let x = "";
    for(let i = 0; i< str.length; i++)
    {
         x += str.charAt(i).toUpperCase();    
    }
    return x;
    
}

export {capitalize, reverse,toLowerCase,toUpperCase};