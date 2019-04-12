import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  toggleFlag: boolean = true;

  send() {
    this.toggleFlag = !this.toggleFlag;
  }

  constructor() { }

  ngOnInit() {
  }

}
