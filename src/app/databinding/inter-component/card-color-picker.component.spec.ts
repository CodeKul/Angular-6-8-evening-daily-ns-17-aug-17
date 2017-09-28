import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColorPickerComponent } from './card-color-picker.component';

describe('CardColorPickerComponent', () => {
  let component: CardColorPickerComponent;
  let fixture: ComponentFixture<CardColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
