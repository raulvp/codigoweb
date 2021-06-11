//primera forma con funciones
/*
function crearPersona(nombre){
    var obj={};
    obj.nombre=nombre;

    obj.mostrarDatos = function(){
        console.log(obj.nombre);
    }

    return obj;
}

var nombre = crearPersona("Raul Vera");
console.log(nombre.mostrarDatos());
*/

//segunda forma literal
/*
var libro1 = {
    titulo:'cien años de soledad',
    autor:'Grabiel Garcia Marquez',
    anio:2005,
    getDatos:function(){
        return this.titulo+"fue escrito por "+this.autor+" el año "+this.anio;
    }

}
//console.log(typeof(libro1));
console.log(libro1.getDatos());
*/

//tercera forma con clases
class Libro{
    

    constructor(titulo,autor,anio){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
    }

    getDatos(){
        return this.titulo+" fue escrito por "+this.autor+" el año "+this.anio;
    }

}

class Revista extends Libro{
    constructor(titulo,autor,anio,mes,dia){
        super(titulo,autor,anio);
        this.mes=mes;
        this.dia=dia;
    }
    
}

var librito = new Libro("Romeo y Julieta","Skeapere",2000);
//console.log(typeof(librito));
console.log(librito.getDatos());

var revista1 = new Revista("Formula 1","Pagina 7",2020,02,01);
console.log(revista1.getDatos()); 


