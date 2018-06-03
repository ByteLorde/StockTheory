import {Stock} from "./Stock.model";
import {StockMarketService} from "./stock-market.service";
import {LabelComponent} from "./label/label.component";

export class CompanyModel {

  CEO         : string;
  name        : string;
  description : string;
  exchange    : string;
  industry    : string;
  issueType   : string;
  range       : string;
  sector      : string;
  symbol      : string;
  website     : string;
  stock       : Stock;
  relatedCompanies: CompanyModel[];
  labels : LabelComponent[];

  constructor(jsonFeed: any) {
    this.CEO         = (<any> jsonFeed).CEO;
    this.name        = (<any> jsonFeed).companyName;
    this.description = (<any> jsonFeed).description;
    this.exchange    = (<any> jsonFeed).exchange;
    this.industry    = (<any> jsonFeed).industry;
    this.issueType   = (<any> jsonFeed).issueType;
    this.sector      = (<any> jsonFeed).sector;
    this.symbol      = (<any> jsonFeed).symbol;
    this.website     = (<any> jsonFeed).website;
    this.relatedCompanies = [];
    this.labels = [];
    this.stock       = null;

  }

  getStockFromRange(range: string) {
      this.range = range;
      this.stock = new Stock(this.symbol, range);
  }


  getDate(date : string) {
    return this.getStock().getDate(date);
  }
  getStock() : Stock {
    if (!this.stock) {
      this.stock = new Stock(this.symbol);
    }
    if (!this.relatedCompanies) {


      let promises = [];
      for (let symbol of this.getPeers()) {
        promises.push(StockMarketService.createCompanyFromSymbol(symbol));
      }
      Promise.all(promises).then(data => {
        this.relatedCompanies = data;
      });
    }
    return this.stock;
  }

  getRelatedCompanies()  {
    return this.relatedCompanies;
  }

  getPeers() {
    return this.getStock().peers;
  }

  refresh() {;
    return this.getStock().refresh();
  }
}
