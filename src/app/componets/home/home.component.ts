import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public homtext: string;
  constructor() {
    this.titulo = "Ultimos articulos";
    this.homtext = 'Bienvenidos a aprendiendo angular con Anderson Jimenez';
   }

  ngOnInit() {
  }

}
