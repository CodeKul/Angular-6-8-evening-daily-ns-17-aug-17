import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[noIf]'
})
export class CustomStrDirective implements OnChanges {

  @Input()
  noIf: boolean;

  constructor(
    private tmRf: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) {

  }
  ngOnChanges() {
    if (!this.noIf) {
      this.vcRf.createEmbeddedView(this.tmRf);
      console.log('called');
    } else {
      this.vcRf.clear();
      console.log('cleared');
    }
  }
}
