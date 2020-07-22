import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MessageService, UIChart} from 'primeng';
import {StockQuote} from '../../model/Stock.model';
import {ChartHoverItem} from '../stock-card/card-sections/chart-section/ChartHoverItem.model';
import {StockService} from '../../services/stock/stock.service';

@Component({
  selector: 'app-portfolio-graph-widget',
  templateUrl: './portfolio-graph-widget.component.html',
  styleUrls: ['./portfolio-graph-widget.component.styl']
})
export class PortfolioGraphWidgetComponent implements OnInit {

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

  constructor(private messageService: MessageService, private stockService: StockService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit() {
    this.icon = 'pi-chart-line';
    this.loadChartData();
    console.log('STOCK:', this.stock);
    this.stockService.fetchTopGainers().subscribe(r => {
      this.stock = r[0];

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
          gradientStroke.addColorStop(0, 'rgba(200, 255, 200, 1)');
          // ctx.shadowColor = "black";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          // ctx.shadowColor = 'rgba(0, 255, 255, 1)'; // CYAN
          // ctx.shadowColor = '#21ce99'; // RGREEN
          // ctx.shadowColor = 'rgb(255, 0, 0)'
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

          const x = e.x;
          const y = e.y;
          const dataset = this.data.datasets[0].data;
          const labels = this.data.labels;
          const timestamp = labels[0];
          const price = dataset[0];
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
