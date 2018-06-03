import { Injectable } from '@angular/core';
import {LabelComponent} from "./label/label.component";
import {UserProfileService} from "./UserProfile.service";

@Injectable()
export class LabelServiceService {

  userLabels : LabelComponent[];
  companyLabels : {};

  constructor(private userService : UserProfileService) {
    let userLabels = userService.getUserLabels();
    // for ( let label of userLabels ) {
    //   for ( let company of label.getAttachedCompanies() ) {
    //     if (!this.companyLabels[company]) {
    //       this.companyLabels[company] = [];
    //     }
    //
    //     this.companyLabels[company].push(label);
    //
    //   }
    // }
  }

  getGenericLabels() : LabelComponent[] {
    let genericLabels : LabelComponent[] = [];
    let colors = ["red", "pink", "orange", "yellow", "green", "blue", "purple"];
    for (let color of colors) {
      let label = new LabelComponent();
      label.setColor(color);
      genericLabels.push(label)
    }
    return genericLabels;

  }

  toggleLabel(symbol  : string, label : LabelComponent) {
    this.userService.toggleLabel(symbol, label);
  }

  getLabels() : LabelComponent[] {
    return this.getGenericLabels();
  }

}
