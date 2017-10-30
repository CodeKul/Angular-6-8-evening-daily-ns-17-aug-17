import { RemoteConnectionService } from './remote-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rec-con',
  template: `
    <p>
      chaged date is {{cpDt}}
    </p>
  `,
  styles: []
})
export class RecConComponent implements OnInit {

  cpDt: string;
  constructor(
    private remCon: RemoteConnectionService
  ) { }

  ngOnInit() {
    this.remCon.subscribeDt(dt => {
      this.cpDt = dt;
    });
  }
}
