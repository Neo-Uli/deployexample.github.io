'use strict'
//alert(typeof val1)//para identificar el tipo de dato


function btnSummar(){
    var val1 = document.getElementById('txtval1').value;
    var val2 = document.getElementById('txtval2').value;
    var suma = 0;

    //var sum = document.getElementById('txtRes');

    suma = parseInt(val1) + parseInt(val2);
    //sum.textContent = suma;
    document.form1.txtRes.value = suma;
}