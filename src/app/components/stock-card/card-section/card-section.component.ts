import {Component, Input, OnInit} from '@angular/core';
import {CardSectionItem} from './CardSection.model';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.styl']
})
export class CardSectionComponent implements OnInit, CardSectionItem {

  @Input()
  header: string;

  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {
  }
}
