import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { items } from './donutChartDate';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent implements OnInit {

  DoughnutChart;
  realResult: number = 0;
  expectedResult: number = 0;

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
      items.forEach((element) => {
        data.datasets[0].backgroundColor.push(element.color);
        data.datasets[0].data.push(element.realValue);
        this.realResult += element.realValue;
        this.expectedResult += element.expectedValue;
        data.labels.push(element.name + '     ' + element.realValue + '/' + element.expectedValue);
      });

    let rResult = this.realResult;
    let eResult = this.expectedResult;

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

        var fontSize = (height / 75);
        ctx.font = fontSize + "em sans-serif";
        this.h = '';
        let sum = rResult + '/' + eResult + 'h';
        let textX = height / 4;
        let textY = height / 2;
        ctx.fillText(sum, textX, textY);
      }
    });
  }
}

