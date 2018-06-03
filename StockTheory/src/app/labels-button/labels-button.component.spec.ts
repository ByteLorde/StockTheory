import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsButtonComponent } from './labels-button.component';

describe('LabelsButtonComponent', () => {
  let component: LabelsButtonComponent;
  let fixture: ComponentFixture<LabelsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
