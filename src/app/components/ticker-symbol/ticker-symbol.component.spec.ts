import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerSymbolComponent } from './ticker-symbol.component';

describe('TickerSymbolComponent', () => {
  let component: TickerSymbolComponent;
  let fixture: ComponentFixture<TickerSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerSymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
