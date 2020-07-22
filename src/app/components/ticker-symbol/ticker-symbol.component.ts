import {Component, Input, OnInit} from '@angular/core';
import {StockService} from '../../services/stock/stock.service';
import {StockQuote} from '../../model/Stock.model';

@Component({
  selector: 'app-ticker-symbol',
  templateUrl: './ticker-symbol.component.html',
  styleUrls: ['./ticker-symbol.component.styl']
})
export class TickerSymbolComponent implements OnInit {

  @Input()
  symbol?: string;

  @Input()
  iconPlacement ?: 'left' | 'right' = 'left';

  @Input()
  spacing ?: 'together' | 'between' = 'together';

  @Input()
  quote?: StockQuote;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    if (!this.symbol && !this.quote) {
      return;
    }

    if (!!this.quote) {
      this.symbol = this.quote.symbol;
      return;
    }

    this.stockService.fetchStockQuote(this.symbol).subscribe(quote => {
      this.quote = quote;
    });
  }

  isTrendingUp(): boolean {
    return this.quote.changePercent >= 0;
  }

  isBigChange(): boolean {
    return Math.abs(this.quote.changePercent) > .1;
  }

}
