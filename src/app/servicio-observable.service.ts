import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioObservableService {
  private valorActualSubject = new BehaviorSubject<string>('')
  valorActual$ = this.valorActualSubject.asObservable();
  
  actualizarValor(value:string){
    this.valorActualSubject.next(value);
  }
}
