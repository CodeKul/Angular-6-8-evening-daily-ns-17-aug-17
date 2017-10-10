import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css']
})
export class LocalRefsComponent implements OnInit {

  cls: string;
  myNm: string;

  @ViewChild('nm')
  nm: ElementRef;

  @ContentChild('add')
  add: ElementRef;

  constructor() {
    this.cls = 'alert alert-success';
  }

  ngOnInit() {
  }

  changeIt(newCol: string) {
    this.cls = `alert alert-${newCol}`;
    console.log(this.nm.nativeElement.value);
  }
}
