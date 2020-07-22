import {Component, Input, OnInit} from '@angular/core';
import {FilterGroup} from '../../../model/PageFilterModel';

@Component({
  selector: 'app-page-filter-group',
  templateUrl: './page-filter-group.component.html',
  styleUrls: ['./page-filter-group.component.styl']
})
export class PageFilterGroupComponent implements OnInit {

  @Input()
  filterGroup: FilterGroup;

  expanded = true;

  constructor() { }

  ngOnInit() {

  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}
