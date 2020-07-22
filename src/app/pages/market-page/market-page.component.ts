import {Component, OnInit} from '@angular/core';
import {MoodBarService} from '../../components/mood-bar/mood-bar.service';
import {MoodbarColor} from '../../model/Moodbar';
import {SymbolNews} from '../../model/Symbol';
import {FilterGroup, FilterGroupItem, StockQuoteFilterGroupItem} from '../../model/PageFilterModel';
import {NewsService} from '../../services/news/news.service';
import {WatchlistService} from '../../services/watchlist/watchlist.service';
import {StockService} from '../../services/stock/stock.service';
import {forkJoin} from 'rxjs';
import {StockQuote} from '../../model/Stock.model';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.styl']
})
export class MarketPageComponent implements OnInit {


  newsArticles: SymbolNews[];

  filters: FilterGroup[];

  constructor(private moodBarService: MoodBarService,
              private newsService: NewsService,
              private stockService: StockService,
              private watchlistService: WatchlistService) { }

  ngOnInit() {
    this.moodBarService.setMoodbarColor(MoodbarColor.VIOLET);
    this.newsArticles = [];
    this.fetchNewsFromWatchlist();
  }

  fetchNewsFromWatchlist() {
    this.watchlistService.getWatchlistedStockSymbols().subscribe(symbols => {
      this.newsService.fetchNewsForStocks(symbols).subscribe(news => {
        this.newsArticles = news;
        console.log('NEWS:', news[0]);
        this.createFilters();
      });
    });
  }

  createFilters() {
    const observables = [
      this.stockService.fetchMostActive(),
      this.stockService.fetchTopGainers(),
      this.stockService.fetchTopLosers(),
      this.stockService.fetchTopVolume(),
      this.stockService.fetchTopPercent(),
    ];

    forkJoin(observables).subscribe((response: StockQuote[][]) => {
      response = response || [];
      const mostActive = response[0] || [];
      const topGainers = response[1] || [];
      const topLosers  = response[2] || [];
      const topVolume  = response[3] || [];
      const topPercent = response[4] || [];

      const filterGroupNames = [
          'Most Active',
          'Top Gainers',
          'Top Losers',
          'Top Volume',
          'Top Percent'
      ];

      const filters: FilterGroup[] = [];
      // filterGroupNames and response should be the same length...
      for (let i = 0; i < filterGroupNames.length; i++) {

        const filterGroupName = filterGroupNames[i];
        const stockList = response[i];

        const filterGroup = new FilterGroup(filterGroupName);
        for (const stockQuote of stockList) {

          const filterGroupItem = new StockQuoteFilterGroupItem(stockQuote);
          filterGroup.addFilter(filterGroupItem);
        }
        filters.push(filterGroup);
      }

      this.filters = filters;
    });
  }
}
