import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() tableData: Array<string>;
  @Input() lable: string;
  @Output() onRemove = new EventEmitter<number>();
  @Output() onAdd= new EventEmitter();
  constructor() { }
  objectKeys = Object.keys;
  changeEmploeeList: Array<string>=['Owner','Admin','Project Manager','HR Manager','Employee'];
  changeProjectList: Array<string>=['Office','Mifort Courses','Copses','Project'];
  removeLine(index) {
    this.onRemove.emit(index);
  }
  addLine(option){
    this.onAdd.emit(option);
  }
  ngOnInit() {
  }

}
