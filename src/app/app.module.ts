import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { PadreComponent } from './padre/padre.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BuscadorComponent,
    ListaLibrosComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
