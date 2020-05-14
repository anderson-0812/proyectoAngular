import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<any>;

  constructor() {
    this.titulo = "Componente peliculas ";
    // el constructor solo inicializa ptropiedades de clase  No se mete logica
    console.log('Constructor de hook lanzado');
    this.peliculas =  [
      {title: 'Spiderman 4', image: 'https://media.gettyimages.com/photos/interactive-spiderman-2-attraction-is-unveiled-at-madame-tussauds-on-picture-id51071273?s=612x612'},
      {title: 'Los vengadores', image: 'https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/24160210/lo-que-debes-recordar-avengers-infinity-war.jpg'},
      {title: 'Batman vs Superman', image: 'https://ichef.bbci.co.uk/news/ws/410/amz/worldservice/live/assets/images/2016/03/23/160323133140_batman_vs_superman_304x171_dcmovies_nocredit.jpg'},
      {title: 'Ironman', image: 'https://www.cinemascomics.com/wp-content/uploads/2019/07/iron-man-no-muerto.jpg'},
    ];
    
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
