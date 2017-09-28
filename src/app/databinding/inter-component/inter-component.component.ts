import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-component',
  templateUrl: './inter-component.component.html',
  styleUrls: ['./inter-component.component.css']
})
export class InterComponentComponent implements OnInit {

  bridgeVar: string;

  constructor() { }

  ngOnInit() {
  }

  colRec(col: string) {
    this.bridgeVar = col;
  }
}
