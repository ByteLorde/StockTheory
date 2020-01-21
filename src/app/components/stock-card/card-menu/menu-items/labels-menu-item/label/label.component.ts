import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Label} from '../../../../../../model/Label.model';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.styl']
})
export class LabelComponent implements OnInit {

  @Input()
  label: Label;

  @Input()
  selected: boolean;

  @Output()
  labelClicked: EventEmitter<Label> = new EventEmitter<Label>();

  constructor() { }

  ngOnInit() {
  }

}
