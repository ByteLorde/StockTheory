import {Component, Input, OnInit} from '@angular/core';
import {CardSectionItem} from '../../card-section/CardSection.model';
import {StockService} from '../../../../services/stock/stock.service';
import {BasicStatData, CompanyProfile, StockQuote} from '../../../../model/Stock.model';

@Component({
  selector: 'app-company-details-section',
  templateUrl: './company-details-section.component.html',
  styleUrls: ['./company-details-section.component.styl']
})
export class CompanyDetailsSectionComponent implements OnInit, CardSectionItem {

  @Input()
  stock: StockQuote;

  header: string;
  icon: string;

  companyProfile: CompanyProfile;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.header = 'Description';
    this.icon = 'pi pi-sliders-v padding-tb-15';

    this.stockService.fetchCompanyProfile(this.stock.symbol).subscribe( (profile: CompanyProfile) => {
      this.companyProfile = profile;
    });
  }
}
