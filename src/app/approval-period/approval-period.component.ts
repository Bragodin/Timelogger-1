import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-period',
  templateUrl: './approval-period.component.html',
  styleUrls: ['./approval-period.component.sass']
})
export class ApprovalPeriodComponent implements OnInit {

  flag: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  f(){
    this.flag = true;
  }
  t(){
    this.flag = false;
  }
}
