function suma(){
    const num1=parseInt(document.getElementById('operando1').value);
    const num2=parseInt(document.getElementById('operando2').value);
    const resultado=document.getElementById('lblResultado');
    const suma = num1 + num2;
    resultado.innerHTML='Resultado: '+suma;
}

function resta(){
    const num1=parseInt(document.getElementById('operando1').value);
    const num2=parseInt(document.getElementById('operando2').value);
    const resultado=document.getElementById('lblResultado');
    const resta = num1 - num2;
    resultado.innerHTML='Resultado: '+resta;
}

function multi(){
    const num1=parseInt(document.getElementById('operando1').value);
    const num2=parseInt(document.getElementById('operando2').value);
    const resultado=document.getElementById('lblResultado');
    const multi = num1 * num2;
    resultado.innerHTML='Resultado: '+multi;
}

function divi(){
    const num1=parseInt(document.getElementById('operando1').value);
    const num2=parseInt(document.getElementById('operando2').value);
    const resultado=document.getElementById('lblResultado');
    const divi = num1 / num2;
    resultado.innerHTML='Resultado: '+divi;
}