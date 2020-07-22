import {Injectable} from '@angular/core';
import {MoodbarColor} from '../../model/Moodbar';

@Injectable({
  providedIn: 'root'
})
export class MoodBarService {

  moodbarColor: MoodbarColor;

  public readonly ANIMATION_DURATION = '400ms';
  constructor() {
    this.moodbarColor = MoodbarColor.CYAN;
  }

  setMoodbarColor(color: MoodbarColor) {
    this.moodbarColor = color;

    // this.moodbarColor = MoodbarColor.WHITE;
    // // setTimeout(() => {
    // //   this.moodbarColor = color;
    // // }, 300);
  }

  generateCss(degree = 90, whitePercent = 0, accentPercent = 10, blackPercent = 70) {
    return `linear-gradient(${degree}deg, rgba(244,251,252,1) ${whitePercent}%, ${this.moodbarColor} ${accentPercent}%, rgba(0,0,0,1) ${blackPercent}%)`;
  }

  generateBoxShadowCss() {
    const accentColor = this.moodbarColor;
    return accentColor;
    return `inset 0 0 25px #fff,
            inset 5px 0 0px ${accentColor},
            inset -5px 0 4px #000,
            inset 5px 0 5px ${accentColor},
            inset -5px 0 75px #000,
            0 0 12px #fff,
            -5px 0 20px ${accentColor},
             5px 0 40px #000`;

  }
}
