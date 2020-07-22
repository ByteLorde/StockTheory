import {Component, OnInit} from '@angular/core';
import {MoodBarService} from '../../components/mood-bar/mood-bar.service';
import {MoodbarColor} from '../../model/Moodbar';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.styl']
})
export class PortfolioPageComponent implements OnInit {

  constructor(private moodBarService: MoodBarService) { }

  ngOnInit() {
    this.moodBarService.setMoodbarColor(MoodbarColor.GREEN);
  }

}
