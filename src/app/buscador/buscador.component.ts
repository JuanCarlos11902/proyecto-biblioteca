import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioObservableService } from '../servicio-observable.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent {
  formulario!: FormGroup;

  constructor(private servicio:ServicioObservableService){
    this.formulario = new FormGroup({
      texto: new FormControl()
    })
  }

  mandarValorObservable(){
    let value: string = this.formulario.value

    this.servicio.actualizarValor(value);

  }

}
