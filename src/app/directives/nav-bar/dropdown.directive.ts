import { Directive, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show')
  isShow: boolean = false;

  @Output('dropdown')
  inClick: EventEmitter<boolean>;

  constructor() {
    this.inClick = new EventEmitter();
  }

  @HostListener('click')
  onInSideClick() {
    this.isShow = !this.isShow;
    this.inClick.emit(this.isShow);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isShow = false;
    this.inClick.emit(this.isShow);
  }
}
