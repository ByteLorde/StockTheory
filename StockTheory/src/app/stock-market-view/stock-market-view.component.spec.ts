import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketViewComponent } from './stock-market-view.component';

describe('StockMarketViewComponent', () => {
  let component: StockMarketViewComponent;
  let fixture: ComponentFixture<StockMarketViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMarketViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
