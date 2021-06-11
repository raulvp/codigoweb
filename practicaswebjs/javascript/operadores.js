/*var numero = 10;
numero++;

console.log(numero);

var num1 = 10;
var num2 = 11;

var resul = num1>=num2;

console.log(resul);*/
/*
var numero1 = 5;
var numero2 = 8;

if(numero1<=numero2){
   console.log("El numero 1 no es mayor que el numero 2"); 
}
if(numero2>=0){
    console.log("Numero 2 es positivo"); 
}
if((numero1<0)||(numero1!=0)){
    console.log("Numero 1 es negativo o distinto de cero");
}
*/
//estructura for
/*for(var i=0;i<=10;i++){
    console.log("Numero: "+i);
    //alert("Numero: "+i);
}*/

//estructura while
/*
var num=0;
while(num<12){
    console.log("Numero: "+num);
    num++;
}*/

//arrays

var dias = ['lunes','martes','miercoles','jueves','viernes'];


//console.log(dias[0]);
//for.....in
for(i in dias){
    console.log(dias[i]);
}

//funciones

var carrera = "Sistemas Informaticos";
var mostrar = carrera.charAt(5);
console.log(mostrar);

//nuestras propias funciones

function sumar(num1, num2){
    console.log(num1+num2);
}

sumar(5,2);

//ambito de variables

var mensaje = "Variable global";

function mostrarMensaje(){
    var mensaje = "variable local";
    console.log(mensaje);
    
}
console.log(mensaje);
mostrarMensaje();

