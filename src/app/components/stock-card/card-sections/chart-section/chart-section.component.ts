import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CardSectionItem} from '../../card-section/CardSection.model';
import {StockQuote} from '../../../../model/Stock.model';
import {MessageService, UIChart} from 'primeng';
import {ChartHoverItem} from './ChartHoverItem.model';

@Component({
    selector: 'app-chart-section',
    templateUrl: './chart-section.component.html',
    styleUrls: ['./chart-section.component.styl']
})
export class ChartSectionComponent implements OnInit, CardSectionItem {

    @ViewChild('chart', {static: false})
    chart: UIChart;

    @Input()
    header: string;

    icon: string;

    @Input()
    stock: StockQuote;

    data: any;
    options: any;

    hoveredItem: ChartHoverItem;

    constructor(private messageService: MessageService) {

    }

    ngOnInit() {
        this.icon = 'pi-chart-line';
        this.loadChartData();
        console.log('STOCK:', this.stock);
        setInterval(() => {

            if (!this.data || !this.data.datasets || !this.data.datasets[0].data) {
                return;
            }

            if (this.data.datasets[0].data.length > 100) {
                return;
                this.data.datasets[0].data.splice(0, 1);
            }
            if (this.data.labels.length > 100) {
                return;
                this.data.labels.splice(0, 1);
            }

            const min = this.stock.week52Low;
            const max = this.stock.week52High;
            this.data.datasets[0].data.push(this.randomIntFromInterval(min, max));
            this.data.labels.push(new Date().getTime());
            if (this.chart.chart) {
                const ctx = this.chart.chart.ctx;
                const gradientStroke: CanvasGradient = ctx.createLinearGradient(500, 0, 100, 0);
                // gradientStroke.addColorStop(0, '#21ce99');
                gradientStroke.addColorStop(0, 'rgba(240, 255, 200, 1)');
                // ctx.shadowColor = "black";
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                // ctx.shadowColor = 'rgba(0, 255, 255, 1)'; // CYAN
                // ctx.shadowColor = '#21ce99'; // RGREEN
                // ctx.shadowColor = 'rgb(255, 0, 0)'; // RED
                ctx.shadowColor = 'rgba(0, 240, 0, 1)'; // CYAN
                // ctx.shadowColor = 'rgba(255, 0, 0, 1)';
                ctx.strokeRect(100, 100, 200, 200);
                // gradientStroke.addColorStop(1, 'rgba(0, 200, 0, 1)');

                this.data.datasets[0].borderColor = gradientStroke;
                this.data.datasets[0].pointBorderColor = gradientStroke;
                this.data.datasets[0].pointBackgroundColor = gradientStroke;
                this.data.datasets[0].pointHoverBackgroundColor = gradientStroke;
                this.data.datasets[0].pointHoverBorderColor = gradientStroke;
            }

            this.chart.refresh();
        });
    }

    selectData(event) {
        this.messageService.add({
            severity: 'info',
            summary: 'Data Selected',
            detail: this.data.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private loadChartData() {
        this.data = {
            labels: [],
            datasets: [
                {
                    fill: false,
                    data: [],
                    backgroundColor: '#14A76C',
                    borderWidth: '2',
                    borderColor: '#14A76C',
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    lineTension: 0,
                    pointHoverBackgroundColor: 'cyan',
                    pointHoverBorderColor: 'white'
                }
            ]
        };

        this.options = {
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                    top: 5,
                    bottom: 5
                }
            },
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            defaultColor: 'white',
            hover: {
                mode: 'x',
                intersect: false,
                onHover: (e, list) => {
                    const element = list[0];
                    if (!element) {
                        this.hoveredItem = null;
                        return;
                    }
                    const x = element._model.x;
                    const y = element._model.y;
                    const datasetIndex = element._datasetIndex;
                    const elementIndex = element._index;
                    const dataset = this.data.datasets[datasetIndex].data;
                    const labels = this.data.labels;
                    const timestamp = labels[elementIndex];
                    const price = dataset[elementIndex];
                    this.hoveredItem = new ChartHoverItem();
                    this.hoveredItem.x = x;
                    this.hoveredItem.y = y;
                    this.hoveredItem.timestamp = timestamp;
                    this.hoveredItem.price = price;

                }
            },
            title: {
                display: false
            },
            scales: {
                tooltips: {
                    mode: 'index',
                    axis: 'y'
                },
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        color: 'cyan'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        color: 'cyan'
                    }
                }]
            }
        };

    }
}
