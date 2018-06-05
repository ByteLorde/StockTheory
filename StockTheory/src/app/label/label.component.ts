import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  static RED    : string = "red";
  static PINK   : string = "pink";
  static ORANGE : string = "orange";
  static YELLOW : string = "yellow";
  static GREEN  : string = "green";
  static BLUE   : string = "blue";
  static PURPLE : string = "purple";
  static TRANSPARENT : string = "transparent";

  text : string;
  color : string;
  checked:boolean;

  @Input() isChecked : boolean;
  @Input() other : LabelComponent;
  @Input() animated : boolean;

  constructor() {
    this.text = "";
    this.color = "";
    this.checked = false;
  }

  getText() {
    return this.other ? this.other.text : this.text;
  }

  getColor() {
    return this.other ? this.other.color : this.color;

  }

  isAnimated() : boolean {
    console.log(this.animated);
    return this.animated;
  }


  // This is always returning label-animated. Fix it.

  getClass() : string {
    return this.animated == true ? "label-animated" : "label";
  }

  setColor(color: string) {
    this.color = color;
  }

  setAnimated(value : boolean) {
    this.animated = value;
  }

  setText(text : string) {
    this.text = text;
  }

  setChecked(value : boolean) {
    this.checked = value;
  }


  ngOnInit() {
    if (this.other) {
      this.color = this.other.color;
      this.text = this.other.text;
      this.checked = this.other.checked;
    }
    else {
      this.color = "red";
      this.text = "";
      this.checked = false;
    }

  }

}
