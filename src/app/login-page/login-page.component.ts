import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loggingIn: boolean = false;
  public loginFailed: boolean = false;
  public errorText?: string;
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.hasValidAccessToken()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() { }

  loginWithPassword() {
    this.loggingIn = true;
    this.authService
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        this.loginForm.value.username ?? '',
        this.loginForm.value.password ?? ''
      )
      .then(() => {
        console.debug('successfully logged in');
        this.authService.setupAutomaticSilentRefresh();
        this.loginFailed = false;
        this.router.navigate(['/dashboard']);
        this.loggingIn = false;
      })
      .catch((err) => {
        console.error('error logging in', err);
        this.errorText = err.error.error_description;
        this.loginFailed = true;
        this.loginForm.value.password = '';
        this.loggingIn = false;
      });
  }

}
