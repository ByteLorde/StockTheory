import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {LabelComponent} from "./label/label.component";

@Injectable()
export class UserProfileService {



  userLabels : LabelComponent[] = [];

  companies : {} = {};




  watchlisted_stocks : string[]; // ["AAPL", "GOOGL", "FX4"];

  constructor(private auth_service : AuthService) {

    let colors = ["red", "pink", "orange", "yellow", "green", "blue", "purple", "lightblue", "gray", "black"];
    for (let color of colors) {
      let label = new LabelComponent();
      label.setColor(color);
      this.userLabels.push(label);
    }

    // // I.E Would return ["AAPL", "GOOGL", "FX4"] for whatever user "Jane Doe"
    // this.watchlisted_stocks = this.auth_service.getUserStocks();
  }

  getWatchlistedStocks() : string[] {
    return this.watchlisted_stocks;
  }

  getCompanyLabels(symbol : string) : LabelComponent[] {

    if (!this.companies[symbol]) {
      return [];
    }
    if (!this.companies[symbol].labels) {
      this.companies[symbol] = {labels: []};
      return [];
    }
    return this.companies[symbol].labels;

  }

  addNewLabel(label : LabelComponent, symbol : string) {
    if (!this.companies[symbol]) {
      this.companies[symbol] = {labels : []};
    }

    this.companies[symbol].labels.push(label);
    this.userLabels.push(label);

  }

  getUserLabels() : LabelComponent[] {
    return this.userLabels;
  }

  getGenericLabels() : LabelComponent[] {
    let colors = ["red", "pink", "orange", "yellow", "green", "blue", "purple", "lightblue", "gray", "black"];
    let labels : LabelComponent[] = [];
    for (let color of colors) {
      let label = new LabelComponent();
      label.setColor(color);
      labels.push(label);
    }
    return labels;
  }

  deleteLabel(label : LabelComponent) {
    for (let key of Object.keys(this.companies)) {
      let labels = this.companies[key].labels;
      let innerIndex = labels.indexOf(label);
      if (innerIndex > -1) {
        this.companies[key].labels.splice(innerIndex, 1);
      }
    }

    let index = this.userLabels.indexOf(label);
    if (index > -1) {
      this.userLabels.splice(index, 1);
    }

  }


  toggleLabel(symbol : string, label : LabelComponent) {
    if (!this.companies[symbol]) {
      this.companies[symbol] = {labels : []};
    }

    if (this.companies[symbol].labels.indexOf(label) == -1) {
      this.companies[symbol].labels.push(label);
    }
    else {
      this.companies[symbol].labels.splice(this.companies[symbol].labels.indexOf(label), 1);
    }


  }

}
