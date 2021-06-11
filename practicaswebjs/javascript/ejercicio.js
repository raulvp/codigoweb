//fibonacci
//function fibonacci(numero){
    /*let a=0,b=1,c,s=1;
    console.log(a,b);
    for(i=3;i<=numero;i++){
        c=a+b;
        console.log(c);
        s=s+c;
        a=b;
        b=c;
    }*/

   /* let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
}

console.log(fibonacci(9));*/

function letras(palabra,letra){
    var contador = 0;
    //var palabra = palabra;
    for(var i=0;i<palabra.length;i++){
        var letraExtra = palabra.charAt(i);
        if(letraExtra==letra){
            contador++;
        }

    }
    return contador;
}

console.log(letras("Hola munda","a"));