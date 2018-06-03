import {Component, Input, OnInit} from '@angular/core';
import {LabelServiceService} from "../label-service.service";
import {LabelComponent} from "../label/label.component";
import {CompanyModel} from "../company.model";

@Component({
  selector: 'app-label-manager',
  templateUrl: './label-manager.component.html',
  styleUrls: ['./label-manager.component.css']
})
export class LabelManagerComponent implements OnInit {

  @Input() company : CompanyModel;

  labels : LabelComponent[];

  constructor(private labelService : LabelServiceService) {
    this.populateList();
  }

  populateList() : void {
    this.labels = [];

    for (let label of this.getGenericLabels()) {
      this.labels.push(label);
    }

    for (let label of this.getUserLabels()) {
      label.setChecked(true);
      this.labels.push(label);
    }
  }

  toggleLabel(label : LabelComponent) {
    this.labelService.toggleLabel(this.company.symbol, label);
  }

  getUserLabels() {
    return [];
  }

  getGenericLabels() {
    return this.labelService.getGenericLabels();
  }

  ngOnInit() {

  }

}
