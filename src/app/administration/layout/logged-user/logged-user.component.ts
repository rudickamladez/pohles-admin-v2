import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss']
})
export class LoggedUserComponent {
  formatedRoles = 'All';

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  get username() {
    let claims = this.authService.getIdentityClaims();
    if (!claims) return 'undefined';
    return claims['preferred_username']
  }

  get name() {
    let claims = this.authService.getIdentityClaims();
    if (!claims) return 'undefined';
    return claims['name']
  }

  get email() {
    let claims = this.authService.getIdentityClaims();
    if (!claims) return 'undefined';
    return claims['email']
  }

  get email_verified() {
    let claims = this.authService.getIdentityClaims();
    if (!claims) return 'undefined';
    return claims['email_verified']
  }

  logout() {
    this.authService.logOut(true);
    this.router.navigate(['/home', { login: true }])
  }

  public toggleTheme() {
    this.document.body.classList.toggle('light');
    this.document.body.classList.toggle('alt-font');
  }

}