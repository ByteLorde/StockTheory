import {BehaviorSubject, Observable} from 'rxjs';
import {StockQuote} from './Stock.model';

export class FilterGroup {

    label: string;

    private filters: FilterGroupItem[];

    constructor(label: string) {
        this.label = label;
        this.filters = [];
    }

    getFilters() {
        return this.filters;
    }

    addFilter(filter: FilterGroupItem) {
        this.filters.push(filter);
    }

    addFilters(filters: FilterGroupItem[]) {
        filters.forEach(filter => {
            this.addFilter(filter);
        });
    }

    removeFilter(filter: FilterGroupItem) {
        this.filters.splice(this.filters.indexOf(filter), 1);
    }

    setFilters(filters: FilterGroupItem[]) {
        this.clearFilters();
        this.addFilters(filters);
    }

    clearFilters() {
        this.filters = [];
    }
}

export class FilterGroupItem {
    label: string;

    constructor(label: string) {
        this.label = label;
    }
}

export class CheckboxFilterGroupItem extends FilterGroupItem implements Checkable {
    selected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(label: string, defaultValue = false) {
        super(label);

        if (defaultValue) {
            this.selected.next(defaultValue);
        }
    }

    isSelected(): boolean {
        return this.selected.getValue();
    }

    listenToChanges(): Observable<boolean> {
        return this.selected.asObservable();
    }

    setSelected(value: boolean): void {
        if (value === this.isSelected()) {
            return;
        }
        this.selected.next(value);
    }

    selectItem(): void {
        this.setSelected(true);
    }

    toggleSelected(): void {
        this.setSelected(!this.isSelected());
    }

    unselectItem(): void {
        this.setSelected(false);

    }
}

export class StockQuoteFilterGroupItem extends FilterGroupItem {

    stockQuote: StockQuote;

    constructor(stockQuote: StockQuote) {
        if (!stockQuote) {
            super(null);
            return;
        }
        super(stockQuote.symbol);
        this.stockQuote = stockQuote;
    }

    get currentTrend(): StockTrend {
        if (!this.stockQuote) {
            return;
        }

        if (this.stockQuote.changePercent < 0) { return StockTrend.NEGATIVE; }
        if (this.stockQuote.changePercent === 0) { return StockTrend.NEUTRAL; }
        if (this.stockQuote.changePercent > 0) { return StockTrend.POSITIVE; }
    }

    get StockTrend() {
        return StockTrend;
    }

}

export interface Checkable {
    selected: BehaviorSubject<boolean>;

    listenToChanges(): Observable<boolean>;
    setSelected(value: boolean): void;
    isSelected(): boolean;
    toggleSelected(): void;
    selectItem(): void;
    unselectItem(): void;
}

export enum StockTrend {
    NEGATIVE = -1,
    NEUTRAL = 0,
    POSITIVE = 1
}

export interface FilterGroupComponent {
    filterGroupItem: FilterGroupItem;
}
