import { EventEmitter } from '@angular/core';
export class RemoteConnectionService {

  dt: string;

  private evEm: EventEmitter<string>;

  constructor() {
    this.dt = 'default';
    this.evEm = new EventEmitter();
  }

  updateDt() {
    // it is doing some heavy work
    this.dt = new Date().toString();
    this.evEm.emit(this.dt);
  }

  subscribeDt(callback: any) {
    this.evEm.subscribe(strDt => callback(strDt));
  }
}
