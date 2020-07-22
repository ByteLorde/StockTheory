import { Component, OnInit } from '@angular/core';
import {CardMenuItem} from '../../stock-card-menu-item/MenuItem.model';
import {LabelService} from '../../../../../services/label/label.service';
import {Label} from '../../../../../model/Label.model';

@Component({
  selector: 'app-labels-menu-item',
  templateUrl: './labels-menu-item.component.html',
  styleUrls: ['./labels-menu-item.component.styl']
})
export class LabelsMenuItemComponent implements OnInit, CardMenuItem {

  disabled: boolean;
  icon: string;
  iconPosition: 'left' | 'right';
  label: string;

  searchCriteria: string;

  labels: Label[];
  cardLabels: Label[];

  constructor(private labelService: LabelService) { }

  ngOnInit() {
    this.disabled = false;
    this.icon = 'pi-tags';
    this.iconPosition = 'left';
    this.label = 'labels';

    this.searchCriteria = '';
    this.labels = [];
    this.cardLabels = [];

    this.updateLists();
  }

  updateLists(): void {
    this.labelService.getLabels().subscribe( (labels: Label[]) => {
      this.labels = labels;
    });

    this.labelService.fetchLabelsForCard('').subscribe( (labels: Label[]) => {
      this.cardLabels = labels;
    });
  }

  toggleLabel(label: Label) {
    if (this.cardLabels.includes(label)) {
      this.labelService.removeLabelFromCard(label, '');
    } else {
      this.labelService.addLabelToCard(label, '');
    }

    this.updateLists();
  }
}
