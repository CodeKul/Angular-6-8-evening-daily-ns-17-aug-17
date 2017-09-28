import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttrComponent } from './custom-attr.component';

describe('CustomAttrComponent', () => {
  let component: CustomAttrComponent;
  let fixture: ComponentFixture<CustomAttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
