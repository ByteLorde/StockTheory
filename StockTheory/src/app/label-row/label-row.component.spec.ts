import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelRowComponent } from './label-row.component';

describe('LabelRowComponent', () => {
  let component: LabelRowComponent;
  let fixture: ComponentFixture<LabelRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
