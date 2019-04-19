import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent implements OnInit {
  DoughnutChart: any = [];
  realResult: number = 23;
  expectedResult: number = 20;

  ngOnInit(){
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
          position: 'bottom',
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

        let sum = '10/44';
        let text = sum, textX, textY;
        textX = height / 2;
        textY = height / 2;
        ctx.fillText(text, textX, textY);
      }
    });
  }
}
