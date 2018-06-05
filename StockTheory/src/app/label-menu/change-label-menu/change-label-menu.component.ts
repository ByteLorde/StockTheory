import {Component, Input, OnInit} from '@angular/core';
import {LabelComponent} from "../../label/label.component";
import {UserProfileService} from "../../UserProfile.service";
import {StockMarketService} from "../../stock-market.service";
import {LabelMenuComponent} from "../label-menu.component";

@Component({
  selector: 'app-change-label-menu',
  templateUrl: './change-label-menu.component.html',
  styleUrls: ['./change-label-menu.component.css']
})
export class ChangeLabelMenuComponent implements OnInit {

  @Input() label : LabelComponent;
  selectedColor : string;
  placeholderLabel : LabelComponent;


  constructor(private userProfile : UserProfileService) {


  }

  updateText() {
    let text = (<any> document.getElementById("nameField")).value;
    this.placeholderLabel.setText(text);
  }

  updateColor() {
    this.placeholderLabel.setColor(this.selectedColor);
  }

  getSaveText() {
    return this.isNew() ? "Create" : "Save";
  }

  isNew() : boolean {
    return this.userProfile.getUserLabels().indexOf(this.label) == -1;
  }

  getFirstFive() {

    return this.getLabels().splice(0, 5);
  }

  getSecondFive() {

    return this.getLabels().splice(5, 10);
  }

  getLabels() : LabelComponent[] {
    let labels = this.userProfile.getGenericLabels().slice();
    for (let label of labels) {
      label.setAnimated(false);

    }
    return labels;
  }

  selectColor(color : string) {
    this.selectedColor = color;
    this.updateColor();
    // this.label.setColor(color);
    // this.userProfile.say(this.label, color, StockMarketService.selectedCompany.symbol);
    // this.userProfile.setLabelColor(this.label, color, StockMarketService.selectedCompany.symbol);
  }

  colorSelected(label : LabelComponent) {
    return this.selectedColor == label.color;
  }

  getLabelText() : string {
    return (<any> document.getElementById("nameField")).value;
    // return "";
  }

  save() {
    this.label.setText(this.getLabelText());
    this.label.setColor(this.selectedColor);
    LabelMenuComponent.setMenuVisible(false);
  }

  addNewLabel() {
    this.save();
    this.userProfile.addNewLabel(this.label, StockMarketService.selectedCompany.symbol);
  }

  getPlaceholderLabel() : LabelComponent {
    return this.placeholderLabel;
  }

  deleteLabel() {
    LabelMenuComponent.setMenuVisible(false);
    this.userProfile.deleteLabel(this.label);
  }

  ngOnInit() {

    this.selectedColor = this.label.color;
    (<any> document.getElementById("nameField")).value = this.label.text;

    this.placeholderLabel = new LabelComponent();
    this.placeholderLabel.setColor(this.selectedColor);
    this.placeholderLabel.setText(this.label.text);

  }

}
