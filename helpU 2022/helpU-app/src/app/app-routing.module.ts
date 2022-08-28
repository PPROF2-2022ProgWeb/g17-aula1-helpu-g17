import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ServiciosComponent, LoginComponent, RegistroComponent, ContactoComponent, Pagina404Component]
