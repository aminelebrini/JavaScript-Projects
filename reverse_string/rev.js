const inn =window.prompt("enter the string : ");
        let rev = '';
        
            rev = inn.split("").reverse().join("");
            document.getElementById('res').innerHTML = rev;