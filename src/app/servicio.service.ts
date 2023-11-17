import { Injectable, OnInit } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService implements OnInit{
  private array!: Libro[]
  constructor() {

    this.array = [new Libro("Las aventuras de Javi","Javi",new Date()),
                  new Libro("Las aventuras de Christian","Christian", new Date()),
                  new Libro("Las aventuras de Chamba","Chamba",new Date())
    ];

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   getLibros(){
    return [...this.array];
   }

   getLibrosFiltrados(filtro:string): Libro[] {
    
    return this.array.filter(libro => libro.tituloLibro().includes(filtro));

   }

}
