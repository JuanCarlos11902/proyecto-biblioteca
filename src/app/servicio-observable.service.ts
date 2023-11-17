import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioObservableService {
  private valorActualSubject = new Subject<string>();
  valorActual$ = this.valorActualSubject.asObservable();
  
  actualizarValor(value:string){
    this.valorActualSubject.next(value);
  }
}
