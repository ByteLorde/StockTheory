import {Component, Input, OnInit} from '@angular/core';
import {CardMenuItem} from '../../stock-card-menu-item/MenuItem.model';
import {StockQuote} from '../../../../../model/Stock.model';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.styl']
})
export class BuySellComponent implements OnInit, CardMenuItem {

  disabled: boolean;
  icon: string;
  iconPosition: 'left' | 'right';
  label: string;

  constructor() {
  }

  ngOnInit() {
    this.disabled = false;
    this.icon = 'pi-dollar';
    this.iconPosition = 'left';
    this.label = 'Buy / Sell';
  }
}
