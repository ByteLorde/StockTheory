import { Component, OnInit } from '@angular/core';
import {StockService} from '../../services/stock/stock.service';
import {StockQuote} from '../../model/Stock.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.styl']
})
export class LandingComponent implements OnInit {

  topGainers: StockQuote[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    console.log(this.stockService)
    this.stockService.fetchTopGainers().subscribe(response => {
      this.topGainers = response;
    });
  }

}
