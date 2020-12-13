import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonalPulsateZoomComponent } from './hexagonal-pulsate-zoom.component';

describe('HexagonalPulsateZoomComponent', () => {
  let component: HexagonalPulsateZoomComponent;
  let fixture: ComponentFixture<HexagonalPulsateZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonalPulsateZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonalPulsateZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
