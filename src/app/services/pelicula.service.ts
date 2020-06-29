import { Pelicula } from '../models/pelicula';

// me permite applicationCache;icar un decorador a la calse sin tener q crear el objeto como tal
import { Injectable } from '@angular/core';

// uso del decoradopr
@Injectable()
export class PeliculaService {
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [

            // tslint:disable-next-line:max-line-length
            new Pelicula('Spiderman 4', 2020, 'https://media.gettyimages.com/photos/interactive-spiderman-2-attraction-is-unveiled-at-madame-tussauds-on-picture-id51071273?s=612x612'),
            // tslint:disable-next-line:max-line-length
            new Pelicula('Los vengadores', 2019, 'https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/24160210/lo-que-debes-recordar-avengers-infinity-war.jpg'),
            // tslint:disable-next-line:max-line-length
            new Pelicula('Batman vs Superman', 2012, 'https://ichef.bbci.co.uk/news/ws/410/amz/worldservice/live/assets/images/2016/03/23/160323133140_batman_vs_superman_304x171_dcmovies_nocredit.jpg'),
            new Pelicula('Ironman', 2008, 'https://www.cinemascomics.com/wp-content/uploads/2019/07/iron-man-no-muerto.jpg'),
              ];
    }

    holaMundo() {
        return 'Hola desde el service de angular :D ';
    }
    getPeliculas() {
        return this.peliculas;
    }
}
