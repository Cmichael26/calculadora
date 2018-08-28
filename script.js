var operacion = prompt('que operacion quieres realizar?');
var numero1 = prompt("Ingrese el primer numero");
var numero2 = prompt("Ingrese el segundo numero");
var numero1 = parseInt(numero1);
var numero2 = parseInt(numero2);

if(operacion == 'suma'){
    var resultado = suma(numero1, numero2);
    alert(resultado)
}

if (operacion == 'resta'){
    var resultado = resta(numero1, numero2);
    alert(resultado)
}

if (operacion == 'division') {
    var resultado = division(numero1, numero2);
    alert(resultado)

}

if (operacion == 'multiplicacion') {
    var resultado = multiplicacion(numero1, numero2);
    alert(resultado)

}

function suma(valor1, valor2){
    return (valor1 + valor2) 
}
function resta(valor1, valor2){
    return (valor1 - valor2)
}
function division(valor1, valor2){
    return (valor1 / valor2)
}
function multiplicacion(valor1, valor2){
    return (valor1 * valor2)
}