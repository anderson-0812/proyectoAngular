
// importamos los modulpos del routin de angular

// nos permite  generar un modulo con esto de la ruta para tenerlos eparado y cargarlo dentro del framework
import { ModuleWithProviders } from '@angular/core';
// clases q nos permiten generar obj de rutas y generar modulos para establecer la configuracion
import { Routes, RouterModule } from '@angular/router';

// importar los componentes en lo cuales yo voya  hacer una pagina exclusiva o una seecion de mi pagina
import {HomeComponent } from './componets/home/home.component';
import {BlogComponent } from './componets/blog/blog.component';
import {FormularioComponent } from './componets/formulario/formulario.component';
import {PeliculasComponent } from './componets/peliculas/peliculas.component';
import {PaginaComponent } from './componets/pagina/pagina.component';
import { ErrorComponent } from './componets/error/error.component';

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-prueba', component: PaginaComponent},
    {path: '**', component: ErrorComponent},
];

// exportar el modulod e rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
