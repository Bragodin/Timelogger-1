import { Component, OnInit, Input, Output } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass']
})
export class BarChartComponent implements OnInit {
  @Output() barSelect;
  @Output() barItemSelect;
  barChart: any = [];
  // exp = new Examp();

  ngOnInit(){

    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['far', 'far','far','far','far','far','far','far','far','far','far','far',],
        datasets: [

        {
          label: 'Dataset 1',
          data: [90, 70, 30, 50, 20, 100, 150, 0, 30, 90, 20, 25],
          backgroundColor: 'green',
          borderWidth: 1,
        },

        {
        label: 'Dataset 2',
        data: [20, 10, 50, 50, 20, 50, 50, 20, 100, 150, 0, 30 ],
        backgroundColor: 'red',
        borderWidth: 1,
        },
        {
          label: 'Dataset 3',
          data: [50, 50, 20, 50, 50, 20, 100, 90, 70, 30,  0, 30, ],
          backgroundColor: 'yellow',
          borderWidth: 1,
        },
      ]
      },

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
