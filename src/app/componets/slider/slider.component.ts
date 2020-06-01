import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // el decorador input es para recibir elvalorde la  propiedad de nombre que esta en el app.component
  @Input() public nombre: string;
  // variablepara controlar el slider del blog
  @Input() public size: string;

  constructor() { }

  ngOnInit() {
  }

}
