import { Component, OnInit } from '@angular/core';
import {StockMarketService} from "../stock-market.service";
import {CompanyModel} from "../company.model";
import {LabelComponent} from "../label/label.component";
import {UserProfileService} from "../UserProfile.service";

@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.css']
})


export class StockModalComponent implements OnInit {

  summaryData : any;
  stock : CompanyModel = StockMarketService.selectedCompany;
  constructor(private userProfile : UserProfileService) { }

  ngOnInit() {
    this.grabSummaryData();
  }

  prettify(value : number) {
    return value;
    // if (isNaN(value)) {
    //   return value;
    // }
    // else {
    //
    //   let formatted = value.toLocaleString();
    //   if (value > 1000000000 || value < -1000000000) {
    //     formatted = (value / 1000000000) + "B";
    //   }
    //   else if (value > 1000000 || value < -1000000) {
    //     formatted = (value / 1000000) + "M";
    //   }
    //   return formatted;
    // }
  }

  getStock() {
    return this.stock;
  }

  getSymbol() {
    return this.stock.symbol;
  }

  getCompanyLabels() : LabelComponent[] {
    return this.userProfile.getCompanyLabels(this.stock.symbol);
  }

  getUserLabels() : LabelComponent[] {
    return this.userProfile.getUserLabels();
  }

  grabSummaryData(date : Date = new Date()) {
    // let chart = StockMarketService.selectedCompany.getStock().chart.slice(-1).pop();
    // StockMarketService.chooseDate(date).then(data => {
    //   console.log("Data");
    //   console.log(data);
    //   this.summaryData = data;
    // });

    if (StockMarketService.selectedCompany.stock) {
      let quote = StockMarketService.selectedCompany.stock.quote;
      let data = [];

      let badKeys = ["vwap", "label"];

      for (let key of Object.keys(quote)) {
        if (badKeys.indexOf(key) > -1) {
          continue;
        }
        let value = quote[key];
        //
        // let camelCaseRegex = /[A-Z]/;
        // if (camelCaseRegex.test("adaWasACoolDuude")) {
        //   console.log("Match");
        //   console.log(camelCaseRegex.exec("adaWasACoolDuude"));
        //   // let index = camelCaseRegex.exec(key).index;
        //   // key = key.substr(0, index) + " " + key.substr(index);
        // }
        data.push({
          key: key,
          value: value
        });
      }
      console.log("Returned data");
      console.log(data);
      this.summaryData = data;
      return data;
    }
    return "";
  }

  getSummaryData() {
    // let chart = StockMarketService.selectedCompany.getStock().chart.slice(-1).pop();
    return this.summaryData;
    // console.log("chart");
    //
    // console.log(chart);
    // let data = [];
    //
    // for ( let key of Object.keys(chart) ) {
    //   if (badKeys.indexOf(key) > -1) {
    //     continue;
    //   }
    //   let value = chart[key];
    //   //
    //   // let camelCaseRegex = /[A-Z]/;
    //   // if (camelCaseRegex.test("adaWasACoolDuude")) {
    //   //   console.log("Match");
    //   //   console.log(camelCaseRegex.exec("adaWasACoolDuude"));
    //   //   // let index = camelCaseRegex.exec(key).index;
    //   //   // key = key.substr(0, index) + " " + key.substr(index);
    //   // }
    //   data.push( {key   : key,
    //               value : value} );
    // }
    // // console.log("Data");
    // // console.log(data);
    // return data;
  }


}
