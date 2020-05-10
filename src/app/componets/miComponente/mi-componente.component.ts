import { Component } from '@angular/core';

@Component({
    // esto es una directica
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
    
})

export class Micomponente {
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo="Hola mundo soy componete";
        this.comentario="Es un comentario de componente";
        this.year=2020;
        this.mostrarPeliculas= true;
        console.log('Mi componente Cargado');
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarMostrarPeliculas(){
        this.mostrarPeliculas = false;
    }
}