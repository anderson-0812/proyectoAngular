import { Pelicula } from './../../models/pelicula';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() public pelicula: Pelicula;
  constructor() { }

  ngOnInit() {
  }

}
