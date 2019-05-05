import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";

export interface Projects {
  color: string;
  name: string;
}


const ELEMENT_DATA: Projects[] = [
  {color: '#FF007A', name: 'Skype', },
  {color: '#FFF500', name: 'Windows', },
  {color: '#AD5300', name: 'Word', },

];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  condition: boolean = false;
  displayedColumns: string[] = ['color', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }
  changeCondition(){
    this.condition === true ? this.condition = false : this.condition = true;
    console.log('Click');
  }
}
