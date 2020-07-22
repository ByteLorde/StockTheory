import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketStockItemCardComponent } from './market-stock-item-card.component';

describe('MarketStockItemCardComponent', () => {
  let component: MarketStockItemCardComponent;
  let fixture: ComponentFixture<MarketStockItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketStockItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketStockItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
