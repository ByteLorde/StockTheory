import {Component, Input, OnInit} from '@angular/core';
import {LabelServiceService} from "../label-service.service";
import {UserProfileService} from "../UserProfile.service";
import {LabelComponent} from "../label/label.component";

@Component({
  selector: 'app-label-row',
  templateUrl: './label-row.component.html',
  styleUrls: ['./label-row.component.css']
})
export class LabelRowComponent implements OnInit {

  @Input() labels : LabelComponent[];
  @Input() rowLimit : number = -1;

  constructor() { }

  getLabels() {

    return this.labels;

  }


  ngOnInit() {
  }

}
