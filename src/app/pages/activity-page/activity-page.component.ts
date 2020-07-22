import {Component, OnInit} from '@angular/core';
import {MoodBarService} from '../../components/mood-bar/mood-bar.service';
import {MoodbarColor} from '../../model/Moodbar';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.styl']
})
export class ActivityPageComponent implements OnInit {

  constructor(private moodBarService: MoodBarService) { }

  ngOnInit() {
    this.moodBarService.setMoodbarColor(MoodbarColor.YELLOW);
  }

}
