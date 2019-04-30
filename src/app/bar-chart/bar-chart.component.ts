import { Component, OnInit, Input, Output } from '@angular/core';
import { Chart } from 'chart.js';
import { chartDate } from './chartData';
import { labels } from './chartData';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass']
})
export class BarChartComponent implements OnInit {
  @Output() barSelect;
  @Output() barItemSelect;
  barChart: any = [];

  ngOnInit(){
    chartDate.forEach((item) => {
      item
    });
    let data = {
      labels: labels,
      datasets: chartDate,
    }
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: data,
      options: {
        title: {
          display: true,
          text: 'Hours',
          position: 'left'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines : {
              display : false
            },
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        },
      }
    });
  }
}
