import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsSectionComponent } from './company-details-section.component';

describe('CompanyDetailsSectionComponent', () => {
  let component: CompanyDetailsSectionComponent;
  let fixture: ComponentFixture<CompanyDetailsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
