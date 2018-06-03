import {Component, Input, OnInit} from '@angular/core';
import {LabelServiceService} from "../label-service.service";
import {CompanyModel} from "../company.model";

@Component({
  selector: 'app-label-row',
  templateUrl: './label-row.component.html',
  styleUrls: ['./label-row.component.css']
})
export class LabelRowComponent implements OnInit {

  @Input() company : CompanyModel;
  constructor(private labelService : LabelServiceService) { }

  getLabels() {
    return this.labelService.getLabelsForStock(this.company.symbol);
  }
  ngOnInit() {
  }

}
