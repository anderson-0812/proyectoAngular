import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = "Componente peliculas ";
    // el constructor solo inicializa ptropiedades de clase  No se mete logica 
    console.log('Constructor de hook lanzado');
    
  }
  
  ngOnInit() {
    // aqui se puedemeter logica
    console.log('OnInit de hook lanzado');
  }
  
  ngDoCheck(){
    console.log('DoCheck lanzado');

  }

  ngOnDestroy(){
    console.log('El componente se va a eliminar de la ejecucion');
  }

  cambiarTitulo(){
    this.titulo = "El titulo a sido cambiado ";
  }
}
