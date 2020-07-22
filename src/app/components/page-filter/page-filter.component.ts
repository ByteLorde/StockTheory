import {Component, Input, OnInit} from '@angular/core';
import {FilterGroup} from '../../model/PageFilterModel';

@Component({
  selector: 'app-page-filter',
  templateUrl: './page-filter.component.html',
  styleUrls: ['./page-filter.component.styl']
})
export class PageFilterComponent implements OnInit {

  @Input()
  filters: FilterGroup[];

  constructor() { }

  ngOnInit() {
    console.log('filters:', this.filters);
  }

}
