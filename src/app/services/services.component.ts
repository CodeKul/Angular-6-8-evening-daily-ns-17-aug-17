import { RemoteConnectionService } from './remote-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']//,
  //providers: [RemoteConnectionService]
})
export class ServicesComponent implements OnInit {

  cmpDt: string;
  constructor(
    private remSer: RemoteConnectionService
  ) { }

  ngOnInit() {
    this.cmpDt = this.remSer.dt;
  }

  onClick() {
    this.remSer.updateDt();
    this.cmpDt = this.remSer.dt;
  }
}
