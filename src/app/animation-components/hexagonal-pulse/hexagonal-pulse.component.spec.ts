import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonalPulseComponent } from './hexagonal-pulse.component';

describe('HexagonalPulseComponent', () => {
  let component: HexagonalPulseComponent;
  let fixture: ComponentFixture<HexagonalPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonalPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonalPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
