import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getHostElement } from '@angular/core/src/render3';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.sass']
})
export class SignComponent implements OnInit {
  fullNameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  ngOnInit() {
    this.fullNameControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.emailControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.passwordControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  }
  constructor( private socialAuthService: AuthService ) {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : " , userData);
      }
    );
  }
}
