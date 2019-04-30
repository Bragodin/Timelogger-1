import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.sass']
})
export class IntegrationsComponent implements OnInit {
  toggleFlag: boolean = true;

  updown() {
    this.toggleFlag = !this.toggleFlag;
  }
  constructor() { }

  ngOnInit() {
  }

}
