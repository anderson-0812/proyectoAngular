import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// importo mis componentes
import { Micomponente } from './componets/miComponente/mi-componente.component';
import { PeliculasComponent } from './componets/peliculas/peliculas.component';
import { HeaderComponent } from './componets/header/header.component';
import { SliderComponent } from './componets/slider/slider.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './componets/home/home.component';
import { BlogComponent } from './componets/blog/blog.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { PaginaComponent } from './componets/pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    Micomponente,
    PeliculasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
