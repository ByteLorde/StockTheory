import {Component, Input, OnInit} from '@angular/core';
import {FilterGroupComponent, StockQuoteFilterGroupItem} from '../../../../../model/PageFilterModel';
import {StockQuote} from '../../../../../model/Stock.model';

@Component({
  selector: 'app-stock-quote-group-item',
  templateUrl: './stock-quote-group-item.component.html',
  styleUrls: ['./stock-quote-group-item.component.styl']
})
export class StockQuoteGroupItemComponent implements OnInit, FilterGroupComponent {

  @Input()
  filterGroupItem: StockQuoteFilterGroupItem;

  constructor() { }

  ngOnInit() {

  }

  get quote(): StockQuote {
    if (!this.filterGroupItem) {
      return {} as StockQuote;
    }
    return this.filterGroupItem.stockQuote;
  }

  get symbol(): string {
    return this.quote.symbol || 'N/A';
  }

}
