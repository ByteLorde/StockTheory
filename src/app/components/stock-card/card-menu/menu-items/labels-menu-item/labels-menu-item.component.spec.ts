import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsMenuItemComponent } from './labels-menu-item.component';

describe('LabelsMenuItemComponent', () => {
  let component: LabelsMenuItemComponent;
  let fixture: ComponentFixture<LabelsMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
