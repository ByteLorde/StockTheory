import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-moodbar-lights',
  templateUrl: './moodbar-lights.component.html',
  styleUrls: ['./moodbar-lights.component.styl']
})
export class MoodbarLightsComponent implements OnInit {

  @Input()
  color ? = 'white';

  positionX;

  private INTERVAL_TIME;

  constructor() { }

  ngOnInit() {

    this.INTERVAL_TIME = this.getRAndInRange(10000, 12000);
    this.startLoop();
  }

  startLoop() {
    const maxRange = window.innerWidth + 10;
    const minRange = -10;
    this.positionX = this.getRAndInRange(minRange, maxRange);


    setTimeout(() => {
      this.positionX = this.getRAndInRange(minRange, maxRange);
    }, 100);
    setInterval(() => {

      if (this.positionX === maxRange) {
        this.positionX = this.positionX - this.getRAndInRange(50, 200);
        return;
      }

      if (this.positionX === minRange) {
        this.positionX = this.positionX + this.getRAndInRange(50, 200);
        return;
      }

      const newValue = this.flipCoin() ? this.getRAndInRange(50, 200) : -this.getRAndInRange(50, 200);
      let newX = this.positionX + newValue;

      newX = Math.min(newX, maxRange);
      newX = Math.max(newX, minRange);

      this.positionX = newX;

    }, this.INTERVAL_TIME);
  }

  flipCoin() {
    return this.getRAndInRange(0, 1) === 1;
  }

  getRAndInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
