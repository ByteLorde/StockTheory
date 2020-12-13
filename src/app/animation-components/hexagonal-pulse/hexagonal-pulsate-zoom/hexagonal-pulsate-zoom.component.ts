import {Component, Input, OnInit} from '@angular/core';
import {MoodBarService} from '../../../components/mood-bar/mood-bar.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-hexagonal-pulsate-zoom',
  templateUrl: './hexagonal-pulsate-zoom.component.html',
  styleUrls: ['./hexagonal-pulsate-zoom.component.styl']
})
export class HexagonalPulsateZoomComponent implements OnInit {

  orbitals: any;

  @Input()
  radius: number = 3;

  @Input()
  hexagonSize: number = 25;

  constructor(private moodBarService: MoodBarService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.orbitals = this.getOrbitals(this.radius);
    this.init();
  }

  init() {
    // const incrementInterval = setInterval(async() => {
    //   this.radius += 1;
    //   for (let i = 0; i < this.orbitals.length; i++) {
    //     let orbital = this.orbitals[i];
    //     orbital += 1;
    //     this.orbitals[i] = orbital;
    //     await this.delay(1000);
    //   }
    //   if (this.radius > 19) {
    //     clearInterval(incrementInterval);
    //   }
    // }, 3000);
  }

  getBackground() {

    const color = this.moodBarService.moodbarColor;
    // return color;
    return this.sanitizer.bypassSecurityTrustStyle(`radial-gradient(black 5%, ${color} 85%, #111)`);
  }

  getOrbitals(numberOfOrbitals: number) {
    const orbitals = [];

    const endpoint = (this.radius * 2) - 1;

    for (let orbital = this.radius; orbital < endpoint; orbital++) {
      orbitals.push(orbital);
    }
    for (let orbital = endpoint; orbital >= this.radius; orbital--) {
      orbitals.push(orbital);
    }
    return orbitals;
  }


  getArrayOfNumbers(numberOfItems: number) {
    const numbers = [];
    for (let i = 0; i < numberOfItems; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
