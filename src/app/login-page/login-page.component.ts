import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { authPasswordFlowConfig } from '../auth-password-flow.config';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginWindowComponent implements OnInit {
  public loggingIn: boolean = false;
  public loginFailed: boolean = false;
  public errorText?: string;
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  userProfile: object = {};

  constructor(
    private oauthService: OAuthService
  ) {
    // Tweak config for password flow
    // This is just needed b/c this demo uses both,
    // implicit flow as well as password flow

    this.oauthService.configure(authPasswordFlowConfig);
    this.oauthService.loadDiscoveryDocument();
  }

  ngOnInit() { }

  loginWithPassword() {
    this.loggingIn = true;
    this.oauthService
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        this.loginForm.value.username ?? '',
        this.loginForm.value.password ?? ''
      )
      .then(() => {
        console.debug('successfully logged in');
        this.loginFailed = false;
        window.location.href = '/admin';
        this.loggingIn = false;
      })
      .catch((err) => {
        console.error('error logging in', err);
        this.errorText = err.error.error_description;
        this.loginFailed = true;
        this.loggingIn = false;
      });
  }

}
