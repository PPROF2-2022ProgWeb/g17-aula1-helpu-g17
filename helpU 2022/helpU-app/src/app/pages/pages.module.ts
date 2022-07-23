import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    ServiciosComponent
  ]
})
export class PagesModule { }
