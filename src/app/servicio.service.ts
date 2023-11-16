import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private array!: Libro[]
  constructor() {

    this.array = [new Libro("Las aventuras de Javi","Javi",new Date()),
                  new Libro("Las aventuras de Christian","Christian", new Date()),
                  new Libro("Las aventuras de Chamba","Chamba",new Date())
    ];

   }

   getLibros(){
    return [...this.array];
   }

   getLibrosFiltrados(filtro:string): Libro[] {
    
    let arrayFiltrado: Libro[] = new Array()

    this.array.forEach(libro =>{
      if (libro.tituloLibro.startsWith(filtro)) {
        arrayFiltrado.push(libro);
      }
    })

    return arrayFiltrado;

   }

}
