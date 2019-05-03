import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Skype'},
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
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
