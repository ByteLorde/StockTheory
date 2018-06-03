import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";
import {LabelComponent} from "../label/label.component";

@Component({
  selector: 'app-labels-button',
  templateUrl: './labels-button.component.html',
  styleUrls: ['./labels-button.component.css']
})
export class LabelsButtonComponent implements OnInit {
  @Input() symbol : string;
  @Input() labels : LabelComponent[];
  constructor() { }

  ngOnInit() {

  }


}
