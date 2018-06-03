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

  @Input() other : LabelComponent;

  constructor() {


  }

  getClass() : string {
    return this.color ;
  }
  setColor(color: string) {
    this.color = color;
    console.log(this.color);
  }

  setText(text : string) {
    this.text = text;
  }

  setChecked(value : boolean) {
    this.checked = value;
  }

  isRed() : boolean {
    return true; // this.color == "red";
  }

  isChecked() : boolean {
    return this.checked
  }
  ngOnInit() {
    if (this.other) {
      console.log("other");
      this.color = this.other.color;
      this.text = this.other.text;
      this.checked = this.other.checked;
    }
    else {
      console.log("This one");
      this.color = "red";
      this.text = "";
      this.checked = false;
    }

  }

}
