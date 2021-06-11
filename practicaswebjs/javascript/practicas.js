//ejercicio 1

function fibonacci(limite){

var numeros = [0,1];

    for(var i=2;i<limite;i++){
        numeros[i] = numeros[i-2] + numeros[i-1];
        //console.log(numeros[i]+",");
    }
return numeros;
}

console.log(fibonacci(9));

//segundo ejercicio

function cantLetras(texto,letra){
    var contador = 0;

    for(var i=0;i<texto.length;i++){
        var letraEncon = texto.charAt(i);
        if(letraEncon==letra){
            contador++;
        }
    }
    return contador;

}

console.log("Cantidad encontrada: "+ cantLetras("Hola Mundo Incos Nocturno","o"));

//ejercicio 3

function mostrarDatos(){
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
   
    console.log("El nombre del estudiante es: "+nombre+" y el apellido: "+apellido);
}