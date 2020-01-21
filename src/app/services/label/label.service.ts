import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Label} from '../../model/Label.model';
import {ColorMap} from '../../model/ColorMap.enum';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  mockLabels: Label[];

  labelsForCard: Label[];

  constructor() {
    const label1 = new Label('Some Label', ColorMap.blue4);
    const label2 = new Label('Hot', ColorMap.orange1);
    const label3 = new Label('Free', ColorMap.yellow1);
    const label4 = new Label('Buy @ 15', ColorMap.green1);
    const label5 = new Label('', ColorMap.teal2);
    const label6 = new Label('Arbitrarily long description for a label', ColorMap.violet1);

    this.mockLabels = [
      label1,
      label2,
      label3,
      label4,
      label5,
      label6
    ];

    this.labelsForCard = this.mockLabels;
  }

  getLabels(): Observable<Label[]> {
    return of(this.mockLabels);
  }

  fetchLabelsForCard(cardId: string) {
    return of(this.labelsForCard);
  }

  addLabelToCard(label: Label, cardId: string) {
    if (this.labelsForCard.includes(label)) {
      return;
    }
    this.labelsForCard.push(label);
  }

  removeLabelFromCard(label: Label, cardId: string) {
    if (!this.labelsForCard.includes(label)) {
      return;
    }
    const index = this.labelsForCard.indexOf(label);
    this.labelsForCard.splice(index, 1);
  }

  createLabel(label: Label) {
    this.mockLabels.push(label);
    return of(label);
  }

  deleteLabel(label: Label) {
    const index = this.mockLabels.indexOf(label);

    if (this.mockLabels.length < 6 && index > -1) {
      return;
    }
    this.mockLabels.splice(index, 1);

    const index2 = this.labelsForCard.indexOf(label);

    if (index2 > -1) {
      this.labelsForCard.splice(index2, 1);
    }
  }

  updateLabel(label: Label) {
    // TODO: PUT by ID.
    const index = this.mockLabels.indexOf(label);
    if (index > 1) {
      this.mockLabels[index] = label;

      // Temp
      const index2 = this.labelsForCard.indexOf(label);
      if (index2 > -1) {
        this.labelsForCard[index2] = label;
      }
    }
    return of(label).toPromise();
  }
}
