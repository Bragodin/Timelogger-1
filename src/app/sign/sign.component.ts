import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.sass']
})
export class SignComponent implements OnInit {
  fullNameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  constructor() { }
  ngOnInit() {
    this.fullNameControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.emailControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.passwordControl = new FormControl('', [Validators.required, Validators.minLength(4)]);

    this.fullNameControl.statusChanges.subscribe((status) => console.log(status));
    this.emailControl.statusChanges.subscribe((status) => console.log(status));
    this.passwordControl.statusChanges.subscribe((status) => console.log(status));
  }

}
