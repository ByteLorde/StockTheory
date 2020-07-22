import {Component, Input, OnInit} from '@angular/core';
import {CheckboxFilterGroupItem, FilterGroupItem, StockQuoteFilterGroupItem} from '../../../../model/PageFilterModel';

@Component({
  selector: 'app-page-filter-group-item',
  templateUrl: './page-filter-group-item.component.html',
  styleUrls: ['./page-filter-group-item.component.styl']
})
export class PageFilterGroupItemComponent implements OnInit {

  @Input()
  filterGroupItem: FilterGroupItem;

  constructor() { }

  ngOnInit() {
  }

  // TODO: Refactor this by having a list of all the different classes of filter items,
  //       and iterate through that list.
  isCheckboxFilterItem(): boolean {
    return this.filterGroupItem instanceof CheckboxFilterGroupItem;
  }

  isStockQuoteFilterItem(): boolean {
    return this.filterGroupItem instanceof StockQuoteFilterGroupItem;
  }
  // TODO: -- END TODO --
}
