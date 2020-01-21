import {Component, Input, OnInit} from '@angular/core';
import {ColumnType, StockQuote, StockQuoteHeader} from '../../model/Stock.model';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.styl']
})
export class StockTableComponent implements OnInit {

  @Input()
  tableData: any[];

  columns: any[];

  selectedStock: StockQuote;

  private _columns: any[];

  constructor() { }

  ngOnInit() {
    this.cardVisible = false;
    const fields = Object.keys(this.tableData[0]);
    this._columns = fields.map(field => this.getColumnFromHeader(field));
    this.updateColumns();
  }

  updateColumns() {
    this.columns = this._columns.filter(column => !column.hidden);
  }

  getColumnFromHeader(field: string) {
    const column = new StockQuoteHeader();
    column.field = field;
    column.hidden = false;
    column.type = ColumnType.STRING;

    switch (field) {
      case 'symbol':
        column.label = 'Symbol';
        break;
      case 'companyName':
        column.label = 'Company Name';
        break;
      case 'calculationPrice':
        column.label = 'Calc Price';
        break;
      case 'primaryExchange':
        column.label = 'Exchange';
        break;
      case 'open':
        column.label = 'Open';
        column.type = ColumnType.CURRENCY;
        break;
      case 'openTime':
        column.label = 'Open Time';
        column.type = ColumnType.TIME;
        break;
      case 'close':
        column.label = 'Close';
        column.type = ColumnType.CURRENCY;
        break;
      case 'closeTime':
        column.label = 'Close Time';
        column.type = ColumnType.TIME;
        break;
      case 'high':
        column.label = 'High';
        column.type = ColumnType.CURRENCY;
        break;
      case 'low':
        column.label = 'Low';
        column.type = ColumnType.CURRENCY;
        break;
      case 'latestPrice':
        column.label = 'Latest Price';
        column.type = ColumnType.CURRENCY;
        break;
      case 'latestSource':
        column.label = 'Latest Source';
        break;
      case 'latestTime':
        column.label = 'Latest Time';
        column.type = ColumnType.TIME;
        break;
      case 'latestUpdate':
        column.label = 'Latest Update';
        column.type = ColumnType.TIME;
        break;
      case 'latestVolume':
        column.label = 'Latest Volume';
        column.type = ColumnType.NUMBER;
        break;
      case 'volume':
        column.label = 'Volume';
        column.type = ColumnType.NUMBER;
        break;
      case 'iexRealtimePrice':
        column.label = 'Realtime Price';
        column.type = ColumnType.CURRENCY;
        break;
      case 'iexRealtimeSize':
        column.label = 'Realtime Size';
        column.type = ColumnType.NUMBER;
        break;
      case 'iexLastUpdated':
        column.label = 'Last Updated';
        column.type = ColumnType.TIME;
        break;
      case 'delayedPrice':
        column.label = 'Delayed Price';
        column.type = ColumnType.CURRENCY;
        break;
      case 'delayedPriceTime':
        column.label = 'Delayed Price Time';
        column.type = ColumnType.TIME;
        break;
      case 'extendedPrice':
        column.label = 'Extended Price';
        column.type = ColumnType.CURRENCY;
        break;
      case 'extendedChange':
        column.label = 'Extended Change';
        column.type = ColumnType.CURRENCY;
        break;
      case 'extendedChangePercent':
        column.label = 'Extended Change Percent';
        column.type = ColumnType.PERCENT;
        break;
      case 'extendedPriceTime':
        column.label = 'Extended Price Time';
        column.type = ColumnType.TIME;
        break;
      case 'previousClose':
        column.label = 'Previous Close';
        column.type = ColumnType.CURRENCY;
        break;
      case 'previousVolume':
        column.label = 'Previous Volume';
        column.type = ColumnType.NUMBER;
        break;
      case 'change':
        column.label = 'Change';
        column.type = ColumnType.CURRENCY;
        break;
      case 'changePercent':
        column.label = 'Change Percent';
        column.type = ColumnType.PERCENT;
        break;
      case 'iexMarketPercent':
        column.label = 'Market Percent';
        column.type = ColumnType.PERCENT;
        break;
      case 'iexVolume':
        column.label = 'IEX Volume';
        column.type = ColumnType.NUMBER;
        break;
      case 'avgTotalVolume':
        column.label = 'Average Total Volume';
        column.type = ColumnType.NUMBER;
        break;
      case 'iexBidPrice':
        column.label = 'IEX Bid Price';
        column.type = ColumnType.CURRENCY;
        break;
      case 'iexBidSize':
        column.label = 'IEX Bid Size';
        column.type = ColumnType.NUMBER;
        break;
      case 'iexAskPrice':
        column.label = 'IEX Ask Price';
        column.type = ColumnType.CURRENCY;
        break;
      case 'iexAskSize':
        column.label = 'IEX Ask Size';
        column.type = ColumnType.NUMBER;
        break;
      case 'marketCap':
        column.label = 'Market Cap';
        column.type = ColumnType.NUMBER;
        break;
      case 'week52High':
        column.label = '52 Week High';
        column.type = ColumnType.CURRENCY;
        break;
      case 'week52Low':
        column.label = '52 Week Low';
        column.type = ColumnType.CURRENCY;
        break;
      case 'ytdChange':
        column.label = 'YTD Change';
        column.type = ColumnType.CURRENCY;
        break;
      case 'peRatio':
        column.label = 'PE Ratio';
        column.type = ColumnType.NUMBER;
        break;
      case 'lastTradeTime':
        column.label = 'Last Trade Time';
        column.type = ColumnType.TIME;
        break;
      case 'isUSMarketOpen':
        column.label = 'US Market Open';
        break;
    }
    return column;
  }

  openStockCard(stock: any) {

    this.cardVisible = true;
  }

  get cardVisible() {
    return !!this.selectedStock;
  }

  set cardVisible(value: boolean) {
    this.selectedStock = null;
  }

  get ColumnType() {
    return ColumnType;
  }
}
