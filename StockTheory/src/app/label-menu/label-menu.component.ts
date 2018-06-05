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

  static labelMenuVisible : boolean = false;
  labelToEdit : LabelComponent;

  constructor(private userProfile : UserProfileService) {

  }

  toggleLabel(label : LabelComponent) : void {
    this.userProfile.toggleLabel(this.symbol, label);
  }

  getNewLabel() {
    let label = new LabelComponent();
    label.setColor("transparent");
    label.setText("");
    return label;
  }

  createNewLabel() {
    let label = this.getNewLabel();
    label.setColor("gray");
    this.labelToEdit = label;
    LabelMenuComponent.labelMenuVisible = true;
  }

  getFilter() : string {
    return (<any> document.getElementById("labelSearch")).value;
  }

  static setMenuVisible(value : boolean) {
    this.labelMenuVisible = value;
  }
  getLabels() : LabelComponent[] {
    let filter = this.getFilter();
    let labels = [];

    if (filter) {
      for (let label of this.labels) {

        if ( label.getText().indexOf(filter) > -1) {
          labels.push(label);
        }

      }
      return labels;
    }
    else {
      labels = this.labels;
    }
    return labels;
  }

  editLabel(index : number) {
    this.labelToEdit = this.labels[index];
    LabelMenuComponent.labelMenuVisible = true;
  }

  isLabelMenuVisible() : boolean {
    return LabelMenuComponent.labelMenuVisible == true;
  }

  setLabelMenuVisible(value : boolean) {
    LabelMenuComponent.labelMenuVisible = value;
  }

  isCompanyLabel(label : LabelComponent) : boolean {
    let labels = this.userProfile.getCompanyLabels(this.symbol);
    return labels.indexOf(label) > -1;
  }
  ngOnInit() {

  }

}
