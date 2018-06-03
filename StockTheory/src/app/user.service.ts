import { Injectable } from '@angular/core';
import {LabelComponent} from "./label/label.component";

@Injectable()
export class UserService {

  companyLabels : {} = {};

  userLabels : LabelComponent[] = [];

  constructor() {

  }

  getUserLabels() : LabelComponent[] {
    let userLabels : LabelComponent[] = [];
    let colors = ["red", "pink", "orange", "yellow", "green", "blue", "purple"];
    for (let color of colors) {
      let label = new LabelComponent();
      label.setColor(color);
      label.setChecked(true);
      userLabels.push(label);
    }
    return userLabels;
  }

  getLabelsFromSymbol(symbol :string) {
    if (this.companyLabels[symbol]) return this.companyLabels[symbol];
    return [];
  }

  toggleLabel(symbol : string, label : LabelComponent) {
    if (!this.companyLabels[symbol]) {
      this.companyLabels[symbol] = [];
    }

    if (this.companyLabels[symbol].indexOf(label) == -1) {
      this.companyLabels[symbol].push(label);
    }
    else {
      this.companyLabels[symbol].splice(this.companyLabels[symbol].indexOf(label), 1);
    }

    for (let label of this.companyLabels[symbol]) {
      console.log(label);
    }
  }

}
