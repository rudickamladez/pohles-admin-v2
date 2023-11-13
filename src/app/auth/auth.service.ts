import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authPasswordFlowConfig } from './auth-password-flow.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly oauthService: OAuthService
  ) {
    // super();
    // Tweak config for password flow
    // This is just needed b/c this demo uses both,
    // implicit flow as well as password flow

    this.oauthService.setStorage(localStorage);
    this.oauthService.configure(authPasswordFlowConfig);
    // this.oauthService.loadDiscoveryDocument();
  }

  public hasValidAccessToken(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  public fetchTokenUsingPasswordFlowAndLoadUserProfile(
    userName: string,
    password: string
  ) {
    return this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
      userName,
      password
    );
  }

  public setupAutomaticSilentRefresh() {
    return this.oauthService.setupAutomaticSilentRefresh({}, 'access_token');
  }

  public getIdentityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public getAccessToken() {
    return this.oauthService.getAccessToken();
  }

  public refreshToken() {
    return this.oauthService.refreshToken();
  }

  public logOut(noRedirectToLogoutUrl: boolean): void {
    return this.oauthService.logOut(noRedirectToLogoutUrl);
  }

  public authorizationHeader() {
    return this.oauthService.authorizationHeader();
  }
}
