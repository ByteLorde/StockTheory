import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StockQuote} from '../../model/Stock.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.styl']
})
export class StockCardComponent implements OnInit {

  @Input()
  visible: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  stock: StockQuote;

  constructor() { }

  ngOnInit() {
    console.log('QUOTE', this.stock);
  }

}
