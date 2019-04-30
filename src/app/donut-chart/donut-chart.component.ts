import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

import { items } from './example.inform';

import { items } from './donutChartDate';


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent implements OnInit {

  DoughnutChart;
  realResult: number;
  expectedResult: number;
  h: string = '';

  constructor(){}
  ngOnInit(){
    let data = {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [],
        borderWidth: 0,
    }]
      }
      for(let i = 0; i < items.length; i++){
        data.labels.push(items[i].name);
        data.datasets[0].backgroundColor.push(items[i].color);
        data.datasets[0].data.push(items[i].value);
      }
    Chart.defaults.global.legend.labels.usePointStyle = true;
    this.DoughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: data,
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
