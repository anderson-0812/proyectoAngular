import { Pelicula } from './../../models/pelicula';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() public pelicula: Pelicula;
// defino un atributo de salida para mi componente padre
  @Output() public marcarFavorita = new EventEmitter(); // EventEmitter crea eventos

  constructor() { }

  ngOnInit() {
  }

  seleccionar(event, pelicula){
    console.log('clic');
    console.log(event);
    console.log('peli');
    console.log(pelicula);
    this.marcarFavorita.emit({
      // tslint:disable-next-line:object-literal-shorthand
      pelicula: pelicula
    });
  }
}
