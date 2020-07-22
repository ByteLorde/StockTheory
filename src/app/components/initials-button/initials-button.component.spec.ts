import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialsButtonComponent } from './initials-button.component';

describe('InitialsButtonComponent', () => {
  let component: InitialsButtonComponent;
  let fixture: ComponentFixture<InitialsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
