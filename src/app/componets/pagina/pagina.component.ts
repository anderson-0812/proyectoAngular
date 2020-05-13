import { Component, OnInit } from '@angular/core';

// importamos librerias para manejar aprametros por rutas y enrutamiento
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre:string
  public apellido:string
  // inicializo en mi construcrtos
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  // recogemos valores del parametro e inicializamos
  ngOnInit() {
    // subscribe es un observable
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    });
  }

  redireccion(){
    // navigate para direccioanr con o sin parametros los parametros son anderson / jimenez 
    this._router.navigate(['/pagina-de-prueba', 'Anderson', 'Jimenez']);
  }

}
