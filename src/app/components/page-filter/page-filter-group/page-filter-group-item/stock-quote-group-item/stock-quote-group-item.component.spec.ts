import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockQuoteGroupItemComponent } from './stock-quote-group-item.component';

describe('StockQuoteGroupItemComponent', () => {
  let component: StockQuoteGroupItemComponent;
  let fixture: ComponentFixture<StockQuoteGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockQuoteGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockQuoteGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
