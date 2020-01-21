import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CardMenuItem} from './MenuItem.model';
import {OverlayPanel} from 'primeng';

@Component({
    selector: 'app-stock-card-menu-item',
    templateUrl: './stock-card-menu-item.component.html',
    styleUrls: ['./stock-card-menu-item.component.styl']
})
export class StockCardMenuItemComponent implements OnInit, CardMenuItem {

    @Input()
    label: string;

    @Input()
    icon: string;

    @Input()
    disabled = false;

    @Input()
    iconPosition: 'left' | 'right' = 'left';

    @ViewChild('overlayPanel', {static: false})
    overlayPanel: OverlayPanel;

    constructor() {}

    ngOnInit() {
    }
}
