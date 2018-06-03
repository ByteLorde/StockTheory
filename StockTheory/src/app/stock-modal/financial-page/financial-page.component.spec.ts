import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPageComponent } from './financial-page.component';

describe('FinancialPageComponent', () => {
  let component: FinancialPageComponent;
  let fixture: ComponentFixture<FinancialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
