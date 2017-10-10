import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  @HostBinding('class.alert')
  isAlert: boolean;

  @HostBinding('class.alert-success')
  isAlertSuccess: boolean;

  constructor(
    private elRef: ElementRef,
    private rend: Renderer2
  ) {
    //this.elRef.nativeElement.className = 'alert alert-success';

    //this.rend.addClass(this.elRef.nativeElement, 'alert');
    //this.rend.addClass(this.elRef.nativeElement, 'alert-success');
  }

  @HostListener('mouseenter')
  onEnter() {
    //this.rend.addClass(this.elRef.nativeElement, 'alert');
    //this.rend.addClass(this.elRef.nativeElement, 'alert-success');
    this.isAlert = true;
    this.isAlertSuccess = true;
  }

  @HostListener('mouseleave')
  onExit() {
    //this.rend.removeClass(this.elRef.nativeElement, 'alert');
    //this.rend.removeClass(this.elRef.nativeElement, 'alert-success');
    this.isAlert = false;
    this.isAlertSuccess = false;
  }
}
