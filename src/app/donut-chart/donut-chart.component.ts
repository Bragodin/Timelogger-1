import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent implements OnInit {
  DoughnutChart: any = [];
  ngOnInit(){
    this.DoughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
      labels: ["Office", "Miffort cour...", "Untracked"],
      datasets: [{
        data: [9, 7, 3],
        backgroundColor: [
            '#FFD600',
            '#FF0000',
            '#C4C4C4',
        ],
        borderWidth: 1,
    }]
      },
      options: {
        cutoutPercentage: 80,
        legend: {
        position: 'right',
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        }

      }
    });
  }
}
