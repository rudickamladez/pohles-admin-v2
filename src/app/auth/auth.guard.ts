import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    if (
      this.authService.hasValidAccessToken() &&
      true // this.authService.hasValidIdToken()
    ) {
      return true;
    } else {
      this.router.navigate(['/home', { login: true }]);
      return false;
    }
  }
}
