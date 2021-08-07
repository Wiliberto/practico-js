// cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

// triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
}

// circulo
const PI = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI
}

// Conectar a html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area)
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const value1 = +input1.value;
    const input2 = document.getElementById("lado2");
    const value2 = +input2.value;
    const input3 = document.getElementById("base");
    const value3 = +input3.value;

    
    const perimetro = perimetroTriangulo(value1,value2,value3 );
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("base");
    const value3 = +input3.value;
    const input4 = document.getElementById("altura");
    const value4 = +input4.value;
    
    const area = areaTriangulo(value3, value4);
    alert(area)
}

function calcularDiametro(){
    const input5 = document.getElementById("InputCirculo")
    const value = +input5.value;

    const diametro = diametroCirculo(value)
    alert(diametro)
}

function calcularPerimetroCirculo(){
    const input5 = document.getElementById("InputCirculo")
    const value = +input5.value;

    const perimetro = perimetroCirculo(value)
    alert(perimetro)
}

function calcularAreaCirculo(){
    const input5 = document.getElementById("InputCirculo")
    const value = +input5.value;

    const area = areaCirculo(value)
    alert(area)
}