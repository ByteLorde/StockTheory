import { Component, OnInit } from '@angular/core';
import {MoodbarColor} from '../../model/Moodbar';
import {MoodBarService} from '../../components/mood-bar/mood-bar.service';
import {NewsService} from '../../services/news/news.service';
import {WatchlistService} from '../../services/watchlist/watchlist.service';
import {SymbolNews} from '../../model/Symbol';
import {CheckboxFilterGroupItem, FilterGroup, FilterGroupItem} from '../../model/PageFilterModel';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.styl']
})
export class NewsPageComponent implements OnInit {

  newsArticles: SymbolNews[];

  filters: FilterGroup[];

  constructor(private moodBarService: MoodBarService,
              private newsService: NewsService,
              private watchlistService: WatchlistService) { }

  ngOnInit() {
    this.moodBarService.setMoodbarColor(MoodbarColor.BLUE);
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

    const dictionary: any = {};

    const desiredKeys = [
      'source',
      'related'
    ];

    this.newsArticles.forEach( (article: SymbolNews) => {

      for (const key of Object.keys(article)) {

        if (!desiredKeys.includes(key)) {
          continue;
        }

        if (!dictionary[key]) {
          dictionary[key] = new Set();
        }

        dictionary[key].add(article[key]);
      }
    });

    const filters: FilterGroup[] = [];
    for (const key of Object.keys(dictionary)) {
      const filterGroup = new FilterGroup(key);

      for (const item of dictionary[key]) {
        const filterGroupItem = new CheckboxFilterGroupItem(item);
        filterGroup.addFilter(filterGroupItem);
      }
      filters.push(filterGroup);
    }

    this.filters = filters;
  }

}
