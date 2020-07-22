import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {CompanyProfile, StockQuote} from '../../../model/Stock.model';
import {SymbolNews} from '../../../model/Symbol';
import {MoodBarService} from '../../../components/mood-bar/mood-bar.service';
import {StockService} from '../../../services/stock/stock.service';
import {Member} from '../../../model/Member.model';
import {MembersService} from '../../../services/members/members.service';

@Component({
  selector: 'app-market-stock-item-card',
  templateUrl: './market-stock-item-card.component.html',
  styleUrls: ['./market-stock-item-card.component.styl']
})
export class MarketStockItemCardComponent implements OnInit {

  @Input()
  news: SymbolNews;

  @Input()
  symbol: string;

  cardActive: boolean;

  stockQuote: any;
  companyProfile: any;

  relevantUsersList: Member[];

  get formattedCompanyName() {
    if (!this.stockQuote || !this.stockQuote.companyName) {
      return 'Not Available';
    }
    return this.stockQuote.companyName.replace('.', '').replace(',', '');
  }

  constructor(private moodbarService: MoodBarService,
              private stockService: StockService,
              private memberService: MembersService) {
  }

  ngOnInit() {
    this.cardActive = false;

    this.stockService.fetchStockQuote(this.symbol).subscribe(data => {
      this.stockQuote = data;
    });

    this.stockService.fetchCompanyProfile(this.symbol).subscribe( (profile: CompanyProfile) => {
      this.companyProfile = profile;
    });

    // TODO: Fetch members for stock symbol
    this.memberService.fetchMembersList().subscribe(members => {
      this.relevantUsersList = members.splice(0, 3);
    })
  }

  setCardActive(value: boolean) {
    this.cardActive = value;
  }

  get relatedNews() {
    if (!this.news || !this.news.related) {
      return [];
    }

    return this.news.related.split(',');
  }

  get moodbarColor() {
    return this.moodbarService.moodbarColor;
  }
}
