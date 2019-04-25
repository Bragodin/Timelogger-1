import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.sass']
})
export class SignComponent implements OnInit {
  toggleFlag: boolean = true;

  signup() {
    this.toggleFlag = !this.toggleFlag;
  }
  constructor() { }

  ngOnInit() {
  }

}
