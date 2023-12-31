export class Libro {

    private titulo:string;
    private autor:string;
    private fecha:Date;

    constructor(titulo:string, autor:string, fecha: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.fecha = fecha;
    }

    
        tituloLibro() : string {
        return this.titulo; 
    }
    

    toString() : string{
        return `Titulo: ${this.titulo}\nAutor: ${this.autor}\nFecha: ${this.fecha.toDateString()}`;

    }

}
