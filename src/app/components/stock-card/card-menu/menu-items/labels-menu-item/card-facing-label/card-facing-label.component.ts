import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Label} from '../../../../../../model/Label.model';

@Component({
  selector: 'app-card-facing-label',
  templateUrl: './card-facing-label.component.html',
  styleUrls: ['./card-facing-label.component.styl']
})
export class CardFacingLabelComponent implements OnInit {


  @Input()
  label: Label;

  @Input()
  size: 'large' | 'small';

  @Input()
  expanded = false;

  @Output()
  labelClicked: EventEmitter<Label> = new EventEmitter<Label>();

  constructor() { }

  ngOnInit() {
  }

}
