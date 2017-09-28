import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-attr',
  templateUrl: './custom-attr.component.html',
  styleUrls: ['./custom-attr.component.css']
})
export class CustomAttrComponent implements OnInit {

  @Input()
  header: string;

  @Input()
  cardTitle: string;

  @Input()
  cardText: string;

  @Output()
  onLike: EventEmitter<string>;

  constructor() {
    this.onLike = new EventEmitter();
  }

  ngOnInit() {
  }

  onSomeoneClick() {
    this.onLike.emit(this.header);
  }
}
