import {Component, Input, OnInit} from '@angular/core';
import {
  CheckboxFilterGroupItem,
  FilterGroupComponent,
  FilterGroupItem,
} from '../../../../../model/PageFilterModel';

@Component({
  selector: 'app-checkbox-filter-group-item',
  templateUrl: './checkbox-filter-group-item.component.html',
  styleUrls: ['./checkbox-filter-group-item.component.styl']
})
export class CheckboxFilterGroupItemComponent implements OnInit, FilterGroupComponent {

  @Input()
  filterGroupItem: CheckboxFilterGroupItem;

  constructor() { }

  ngOnInit() {
  }

}
