import {Component, Input, OnInit} from '@angular/core';
import {SymbolNews} from '../../../model/Symbol';
import {MoodBarService} from '../../../components/mood-bar/mood-bar.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.styl']
})
export class NewsCardComponent implements OnInit {

  @Input()
  news: SymbolNews;

  cardActive: boolean;

  constructor(private moodbarService: MoodBarService) { }

  ngOnInit() {
    console.log('NEWS:', this.news);
    this.cardActive = false;
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
