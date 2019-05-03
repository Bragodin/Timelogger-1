import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
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
