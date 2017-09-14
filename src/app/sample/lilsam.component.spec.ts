import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LilsamComponent } from './lilsam.component';

describe('LilsamComponent', () => {
  let component: LilsamComponent;
  let fixture: ComponentFixture<LilsamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LilsamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LilsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
