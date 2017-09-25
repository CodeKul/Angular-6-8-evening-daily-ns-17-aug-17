import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  carNm: string;
  ipTyp = 'button';
  dt: string;

  constructor() {
    this.carNm = 'Mercedez';
  }

  chDt() {
    this.dt = new Date().toString();
  }
}
