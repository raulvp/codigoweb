/*function crearPersona(nombre){
    var obj={};
    obj.nombre=nombre;
    obj.greeting = function(){
        console.log("Mostrar funcion");
    };
    return obj;
}

var raul = crearPersona("Raul Vera");
raul.nombre;
raul.greeting();
*/
/*
const s1 = "Hola Mundo";
console.log(typeof(s1));

const s2 = new String("Hola con objetos");
console.log(typeof(s2));
*/

//objetos literales
/*
var libro1 = {
    titulo:'Cien vistas logicas',
    autor:'Raul Perez',
    anio:'2010',
    getDatos:function(){
        return this.titulo+" fue escrito por "+this.autor+" en el año "+this.anio;
    }
}

console.log(libro1.getDatos());

*/

//objetos con constructores
/*function Libro(titulo,autor,anio){
    this.titulo=titulo;
    this.autor=autor;
    this.anio=anio;
    this.getDatos=function(){
        return this.titulo+" fue escrito por "+this.autor+" en el año "+this.anio;
    }
}

var libro1=new Libro('Cosas de Informatica','Raul Vera','2020');
console.log(libro1);
console.log(libro1.getDatos());
*/

//clases
class Libro{

    constructor(titulo,autor,anio){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
    }

    getDatos(){
        return this.titulo+" fue escrito por "+this.autor+" en el año "+this.anio;
    }


}

class Revista extends Libro{
    constructor(titulo,autor,anio,mes){
        super(titulo,autor,anio);
        this.mes=mes;
    }

}

var librito = new Libro('libro 3','Anonimo',2015);
console.log(librito.getDatos());

var revista1=new Revista('Revista2',"Anonimo",2010,"enero");
console.log(revista1.getDatos());