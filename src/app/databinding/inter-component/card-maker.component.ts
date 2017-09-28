import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-maker',
  templateUrl: './card-maker.component.html',
  styleUrls: ['./card-maker.component.css']
})
export class CardMakerComponent implements OnInit {

  @Input()
  ipCol: string;
  constructor() { }

  ngOnInit() {
  }

}
