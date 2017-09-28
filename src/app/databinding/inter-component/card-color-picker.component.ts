import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-color-picker',
  templateUrl: './card-color-picker.component.html',
  styleUrls: ['./card-color-picker.component.css']
})
export class CardColorPickerComponent implements OnInit {

  @Output()
  onColor: EventEmitter<string>;

  constructor() {
    this.onColor = new EventEmitter();
  }

  ngOnInit() {
  }

  linkClick(col: string) {
    this.onColor.emit(`card text-white bg-${col} mb-3`);
  }
}
