import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mobiles = [
    'Android',
    'Apple',
    'Moto',
    'Samsung',
    'Windows',
    'Nokia'
  ];
  day = 2;
  constructor() { }

  ngOnInit() {
  }

}
