import { Component } from '@angular/core';
//import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //formulario: FormGroup;


  constructor(){}

  ngOnInit(){}

  formatLabelTemp(value: number) {
    if (value >= 10) {
      return Math.round(value / 100) + ' °C';
    }

    return value;
  }

  formatLabelHumi(value: number) {
    if (value >= 10) {
      return Math.round(value / 100) + ' %';
    }

    return value;
  }
}
