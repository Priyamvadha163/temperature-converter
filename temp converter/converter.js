console.log("script working..");

let celsius=document.getElementById('celsius');
let fahrenheit=document.getElementById('fahrenheeit');
let result=document.getElementById('result');
let novalue=document.getElementById('novalue');
let noUnit=document.getElementById('noUnit');
let button=document.getElementById('convert');

function tocelsius(temp) {
    return (temp - 32) * (5/9);
}
function tofarenheit(temp) {
    return temp * (9 / 5) + 32;
}

button.onclick = function(){
    let val = document.getElementById('value').value;
    let ans;

    if (val == ''){
        novalue.innerHTML = "should be given an value";

    }

    val = Number(val);

    if (celsius.checked) {
        ans = tocelsius(val).toLocaleString(undefined,{style:'unit',unit:'celsius',minimumFractionDigits:2,maximumFractionDigits:2})
    } else if(fahrenheit.checked) {
        ans = tofarenheit(val).toLocaleString(undefined,{style:'unit',unit:'celsius',minimumFractionDigits:2,maximumFractionDigits:2})
    }else {
        noUnit.innerHTML = "must select the unit to convert";
    }

    result.innerHTML = ans;
}