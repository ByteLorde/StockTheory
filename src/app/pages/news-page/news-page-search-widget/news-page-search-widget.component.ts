import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page-search-widget',
  templateUrl: './news-page-search-widget.component.html',
  styleUrls: ['./news-page-search-widget.component.styl']
})
export class NewsPageSearchWidgetComponent implements OnInit {
  items: any;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io'},
      {label: 'Theming', icon: 'pi pi-palette'}
    ];
  }

}
