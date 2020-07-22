import {Component, OnInit, ViewChild} from '@angular/core';
import {MoodBarService} from '../../mood-bar/mood-bar.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.styl']
})
export class UserAvatarComponent implements OnInit {

  @ViewChild('bubble', { static: false })
  bubble: HTMLElement;

  constructor(private moodBarService: MoodBarService) { }

  ngOnInit() {

  }

  get moodbarColor() {
    return this.moodBarService.moodbarColor;
  }

  getBoxShadowCss() {
    return this.moodBarService.generateBoxShadowCss();
  }

}
