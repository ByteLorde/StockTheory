import {Component, Input, OnInit} from '@angular/core';
import {StockQuote} from '../../../model/Stock.model';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.styl']
})
export class TradeComponent implements OnInit {

  @Input()
  stock: StockQuote;

  tabs: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.tabs = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
    ];
  }

}
