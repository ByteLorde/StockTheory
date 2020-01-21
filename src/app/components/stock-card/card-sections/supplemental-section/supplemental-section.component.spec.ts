import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementalSectionComponent } from './supplemental-section.component';

describe('SupplementalSectionComponent', () => {
  let component: SupplementalSectionComponent;
  let fixture: ComponentFixture<SupplementalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
