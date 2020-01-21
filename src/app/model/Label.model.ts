import {ColorMap} from './ColorMap.enum';

export class Label {

    id: string;
    text: string;
    color: string;
    actions: any;

    constructor(text?: string, color?: ColorMap) {
        this.text = text;
        this.color = color;
    }
}
