import {AlphaVantageAPI} from "alpha-vantage-cli";

var ALPHA_VANTAGE_KEY = '1I4DFBMCFGHXCYBI';
import { IEXClient } from 'iex-api'
import * as _fetch from 'isomorphic-fetch'
import {ChartRangeOption} from "iex-api/apis/stocks";
import {StockMarketService} from "./stock-market.service";

const iex = new IEXClient(_fetch)



// var av = new AlphaVantageAPI(ALPHA_VANTAGE_KEY, 'compact', true);

export class Stock {

  quote: any;
  news : any;
  chart: any;
  peers: any;
  book : any;
  financials: any;
  trades : any;
  date : string;
  data : any;
  loaded: boolean;

  constructor(private stockSymbol: string, private range="1m") {
    this.loaded = false;
    this.refresh();
  }

  getDate(date: string) {
    if (date == this.date) {
      console.log("Date retrieved: " + this.date);
      return this.data;
    }
    this.date = date;
    //CHANGE THIS TO BE THE DATE RECEIVED
    let request = "/stock/" + this.stockSymbol + "/chart/date/" + "20180521";
    console.log("Request : " + request);
    return StockMarketService.request(request);
  }

  getPreviousDate() {


  }

  isLoaded() {
    return this.loaded;
  }

  getSymbol() {
    return this.stockSymbol;
  }

  getRange() : string {
    return this.range;
  }

  refresh() {
    if (!this.stockSymbol) return;
    return iex.request("/stock/" + this.stockSymbol + "/batch?types=book,financials,peers,quote,news,chart&range=" + this.range + "&last=4").then(data => {
      if(!data) {
        console.log("BAD DATA DETECTED");
        console.log(data);
        return;
      }
      console.log("Fetched");
      console.log(data);

      this.quote = data.quote;
      this.news  = data.news;
      this.chart = data.chart;
      this.peers = data.peers;
      this.book  = data.book;
      this.financials = data.financials;
      iex.request("/deep/trades?symbols=" + this.stockSymbol + "&last=100").then(data => {
        this.trades = data;
        console.log(data);
      });
      this.loaded = true;
    });
  }
}
