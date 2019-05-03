import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";

export interface PeriodicElement {
  name: string;
  position: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Skype', },
  {position: 2, name: 'Windows'},
  {position: 3, name: 'Word'},

];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
