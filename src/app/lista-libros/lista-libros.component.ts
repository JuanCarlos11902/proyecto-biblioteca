import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicioObservableService } from '../servicio-observable.service';
import { ServicioService } from '../servicio.service';
import { Subscription } from 'rxjs';
import { Libro } from '../libro';


@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit, OnDestroy{

  private subscription!: Subscription
  arrayFiltrado!: Libro[]

  constructor(private servicioObservable: ServicioObservableService,
              private servicio: ServicioService ){

  }
  
  ngOnInit(): void {
      this.subscription = this.servicioObservable.valorActual$.subscribe(valor =>{
      this.arrayFiltrado = this.servicio.getLibrosFiltrados(valor);
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
