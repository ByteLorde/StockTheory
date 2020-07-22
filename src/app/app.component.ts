import { Component } from '@angular/core';
import {MoodBarService} from './components/mood-bar/mood-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'StockTheory';

  constructor(private moodBarService: MoodBarService) {
  }

  getColorCoordinatedBackgroundColor() {
    return this.moodBarService.moodbarColor;
  }

  getAnimationDuration() {
    return this.moodBarService.ANIMATION_DURATION;
  }
}
