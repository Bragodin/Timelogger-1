import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {
  signForm: FormGroup;
  ngOnInit() {
    this.signForm = new FormGroup({
      "passwordControl": new FormControl('', [Validators.required, Validators.minLength(6)
      ]),
    });
  }
}
