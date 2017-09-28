import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterComponentComponent } from './inter-component.component';

describe('InterComponentComponent', () => {
  let component: InterComponentComponent;
  let fixture: ComponentFixture<InterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
