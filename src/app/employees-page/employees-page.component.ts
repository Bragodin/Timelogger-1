import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  email: string;
  role: string;
  plan: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {email: 'naruto.com', name: 'Naruto Uzumaki', role: 'Hokage', plan: '180/168'},
  {email: 'saske.com', name: 'Sasuke Uchiha', role: 'Apostate ninja', plan: '150/158'},
  {email: 'sakura.com', name: 'Sakura', role: 'Ninja', plan: '170/120'},
  {email: 'naruto.com', name: 'Naruto Uzumaki', role: 'Hokage', plan: '180/168'},
  {email: 'saske.com', name: 'Sasuke Uchiha', role: 'Apostate ninja', plan: '150/158'},
  {email: 'sakura.com', name: 'Sakura', role: 'Ninja', plan: '170/120'},
  {email: 'naruto.com', name: 'Naruto Uzumaki', role: 'Hokage', plan: '180/168'},
  {email: 'saske.com', name: 'Sasuke Uchiha', role: 'Apostate ninja', plan: '150/158'},
  {email: 'sakura.com', name: 'Sakura', role: 'Ninja', plan: '170/120'},
  {email: 'naruto.com', name: 'Naruto Uzumaki', role: 'Hokage', plan: '180/168'},
  {email: 'saske.com', name: 'Sasuke Uchiha', role: 'Apostate ninja', plan: '150/158'},
  {email: 'sakura.com', name: 'Sakura', role: 'Ninja', plan: '170/120'},
];
@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.sass']
})
export class  EmployeesPageComponent {
  displayedColumns: string[] = ['name', 'email', 'role', 'plan'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
