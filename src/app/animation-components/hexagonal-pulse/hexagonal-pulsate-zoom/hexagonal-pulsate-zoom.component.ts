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

  }

  getBackground() {
    const color = this.moodBarService.moodbarColor;
    return color;
  }

  getOrbitals(numberOfOrbitals: number) {
    const orbitals = [];

    const endpoint = (numberOfOrbitals * 2) - 1;

    for (let orbital = numberOfOrbitals; orbital < endpoint; orbital++) {
      orbitals.push(orbital);
    }
    for (let orbital = endpoint; orbital >= numberOfOrbitals; orbital--) {
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
