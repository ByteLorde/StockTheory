import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MoodBarService} from './mood-bar.service';

@Component({
  selector: 'app-mood-bar',
  templateUrl: './mood-bar.component.html',
  styleUrls: ['./mood-bar.component.styl']
})
export class MoodBarComponent implements OnInit {

  @Input()
  height = '5px';

  opacity: 1;
  width = '100%';
  constructor(private moodbarService: MoodBarService) { }

  ngOnInit() {

    setInterval(() => {
      if (this.opacity > .5) {
        this.opacity -= .1;
      }
    }, 10000);
    
  }

  get gradientCss() {
    return this.moodbarService.generateCss();
  }

  get backgroundColor() {
    return this.moodbarService.moodbarColor as string;
  }

  get animationDuration() {
    return this.moodbarService.ANIMATION_DURATION;
  }
}
