import {Component, Input, OnInit} from '@angular/core';
import {CompanyModel} from "../company.model";

@Component({
  selector: 'app-labels-button',
  templateUrl: './labels-button.component.html',
  styleUrls: ['./labels-button.component.css']
})
export class LabelsButtonComponent implements OnInit {

  @Input() company : CompanyModel;
  constructor() { }

  ngOnInit() {
  }

  getCompany() : CompanyModel {
    return this.company;
  }
}
