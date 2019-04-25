import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.sass']
})
export class CellComponent implements OnInit {
  @Input() cellData: string;
  selected: string = '1';
  constructor() { }

  ngOnInit() {
  }

}
