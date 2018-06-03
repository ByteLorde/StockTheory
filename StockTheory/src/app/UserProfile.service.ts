import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {LabelComponent} from "./label/label.component";

@Injectable()
export class UserProfileService {



  userLabels : LabelComponent[] = [];

  companies : {} = {};




  watchlisted_stocks : string[]; // ["AAPL", "GOOGL", "FX4"];

  constructor(private auth_service : AuthService) {

    let userLabels : LabelComponent[] = [];
    let colors = ["red", "pink", "orange", "yellow", "green", "blue", "purple"];
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

  getCompanyLabels(symbol : string) {
    if (!this.companies[symbol]) {
      this.companies[symbol] = {labels : []}
    }
    return this.companies[symbol].labels;
  }

  getUserLabels() : LabelComponent[] {
    return this.userLabels;
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

    for (let label of this.companies[symbol]) {
      console.log(label);
    }
  }

}
