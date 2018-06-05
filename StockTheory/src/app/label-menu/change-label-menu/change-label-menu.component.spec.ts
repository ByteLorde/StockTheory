import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLabelMenuComponent } from './change-label-menu.component';

describe('ChangeLabelMenuComponent', () => {
  let component: ChangeLabelMenuComponent;
  let fixture: ComponentFixture<ChangeLabelMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLabelMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLabelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
