import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { Information } from './example.inform';
import { DonutData } from './example.inform';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent implements OnInit {
  DoughnutChart: object = [];
  realResult: number;
  expectedResult: number;
  h: string = '';
  a: any = [];
  constructor(inf: Information){
    this.a = inf;
  }
  ngOnInit(){
    console.log(this.a.items);
    Chart.defaults.global.legend.labels.usePointStyle = true;
    this.DoughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
      labels: ["Office", "Miffort cour...", "Untracked", "Miffort cour...","Miffort cour..."],
      datasets: [{
        data: [9, 7, 3],
        backgroundColor: [
            '#FFD600',
            '#FF0000',
            '#C4C4C4',
        ],
        borderWidth: 0,

    }]
      },
      options: {
        cutoutPercentage: 90,
        legend: {
          position: 'right',
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        }

      }
    });
    let originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
      draw: function() {
        originalDoughnutDraw.apply(this, arguments);

        const chart = this.chart;
        const width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        this.realResult = 10;
        this.expectedResult = 20;
        this.h = '';
        let sum =  this.realResult + '/' + this.expectedResult + this.h;
        let text = sum, textX, textY;
        textX = height / 2;
        textY = height / 2;
        ctx.fillText(text, textX, textY);
      }
    });
  }
}
