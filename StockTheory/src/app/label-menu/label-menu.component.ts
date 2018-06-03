import {Component, Input, OnInit} from '@angular/core';
import {LabelServiceService} from "../label-service.service";
import {LabelComponent} from "../label/label.component";
import {CompanyModel} from "../company.model";
import {UserProfileService} from "../UserProfile.service";

@Component({
  selector: 'app-label-menu',
  templateUrl: './label-menu.component.html',
  styleUrls: ['./label-menu.component.css']
})
export class LabelMenuComponent implements OnInit {

  @Input() symbol : string;
  @Input() labels : LabelComponent[];

  constructor(private userProfile : UserProfileService) {

  }

  toggleLabel(label : LabelComponent) : void {
    this.userProfile.toggleLabel(this.symbol, label);
  }

  getLabels() : LabelComponent[] {
    return this.labels;
  }

  isCompanyLabel(label : LabelComponent) : boolean {
    let labels = this.userProfile.getCompanyLabels(this.symbol);
    return labels.indexOf(label) > -1;
  }
  ngOnInit() {

  }

}
