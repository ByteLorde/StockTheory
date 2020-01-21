import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFacingLabelComponent } from './card-facing-label.component';

describe('CardFacingLabelComponent', () => {
  let component: CardFacingLabelComponent;
  let fixture: ComponentFixture<CardFacingLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFacingLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFacingLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
