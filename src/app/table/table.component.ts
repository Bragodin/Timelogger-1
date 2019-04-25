import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() tableData: Array<string>;
  @Output() onRemove = new EventEmitter<number>();
  constructor() { }
  objectKeys = Object.keys;

  removeLine(index) {
    this.onRemove.emit(index);
  }
  ngOnInit() {
  }

}
