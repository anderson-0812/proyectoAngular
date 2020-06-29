import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Pelicula } from './../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]

})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  // public peliculas: Array<Pelicula>;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  // tslint:disable-next-line:variable-name
  constructor( private _peliculaService: PeliculaService) {
    this.titulo = 'Componente peliculas ';
    // el constructor solo inicializa ptropiedades de clase  No se mete logica
    console.log('Constructor de hook lanzado');
    this.peliculas =  this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit() {
    // aqui se puedemeter logica
    console.log('OnInit de hook lanzado');
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {
    console.log('DoCheck lanzado');

  }

  ngOnDestroy() {
    console.log('El componente se va a eliminar de la ejecucion');
  }

  cambiarTitulo() {
    this.titulo = 'El titulo a sido cambiado ';
  }

  // evendo usado con utput
  mostrarFavorita(event) {
    console.log('entro al evento');
    console.log(event);
    this.favorita = event.pelicula;
  }
}
