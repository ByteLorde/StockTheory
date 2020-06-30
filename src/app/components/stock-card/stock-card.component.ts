import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {StockQuote} from '../../model/Stock.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.styl']
})
export class StockCardComponent implements OnInit, AfterViewInit {

  @Input()
  visible: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  stock: StockQuote;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log('QUOTE', this.stock);
  }

  ngAfterViewInit() {
    this.addFogMask();
  }

  addFogMask() {
    setTimeout(() => {
      const fog1 = this.renderer.createElement('div');
      this.renderer.addClass(fog1, 'fog');
      this.renderer.addClass(fog1, 'fog-1');

      const fog2 = this.renderer.createElement('div');
      this.renderer.addClass(fog2, 'fog');
      this.renderer.addClass(fog2, 'fog-2');

      const mask = document.getElementsByClassName('ui-dialog-mask')[0];
      console.log('MASK:', mask);

      this.renderer.appendChild(mask, fog1);
      this.renderer.appendChild(mask, fog2);
    });


  }



}
