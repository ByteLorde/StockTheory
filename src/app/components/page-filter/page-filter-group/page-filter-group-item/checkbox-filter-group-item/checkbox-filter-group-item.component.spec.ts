import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFilterGroupItemComponent } from './checkbox-filter-group-item.component';

describe('CheckboxFilterGroupItemComponent', () => {
  let component: CheckboxFilterGroupItemComponent;
  let fixture: ComponentFixture<CheckboxFilterGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFilterGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFilterGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
