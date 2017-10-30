import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecConComponent } from './rec-con.component';

describe('RecConComponent', () => {
  let component: RecConComponent;
  let fixture: ComponentFixture<RecConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
