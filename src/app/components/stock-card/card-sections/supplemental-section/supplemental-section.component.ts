import { Component, OnInit } from '@angular/core';
import {MembersService} from '../../../../services/members/members.service';
import {CardSectionItem} from '../../card-section/CardSection.model';
import {LabelService} from '../../../../services/label/label.service';

@Component({
  selector: 'app-supplemental-section',
  templateUrl: './supplemental-section.component.html',
  styleUrls: ['./supplemental-section.component.styl']
})
export class SupplementalSectionComponent implements OnInit, CardSectionItem {

  header: string;
  icon: string;

  labelsExpanded: boolean;
  constructor(private memberService: MembersService,
              private labelService: LabelService) { }

  ngOnInit() {
    this.labelsExpanded = false;
  }

  get cardMembers() {
    return this.memberService.fetchMembersForCard('');
  }

  get cardLabels() {
    return this.labelService.fetchLabelsForCard('');
  }
}
