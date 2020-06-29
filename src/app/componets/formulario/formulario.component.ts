import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public campo: string;
  public user: any;
  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: '',
    }
   }

  ngOnInit() {
  }

  onSubmit() {
    alert('user');
    console.log(this.user);
  }

  hasdadoClick() {
    alert('has dado clic');
  }

  haSalido() {
    alert('has salido del focus de campo');
  }

  hasdadoEnter() {
    alert('has dado enter');
  }
}
