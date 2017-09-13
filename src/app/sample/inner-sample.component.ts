import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-sample',
  template: `
   <div class="brd">
     <label>Enter password </label> <input type="password">
   </div>
  `,
  styles: [`
    .brd {
      border : 1px solid red;
    }
  `]
})
export class InnerSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
