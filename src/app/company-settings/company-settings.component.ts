
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.sass']
})
export class CompanySettingsComponent implements OnInit {

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
