import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public isKrakonos: boolean = false;

  constructor(
    private authService: AuthService,
    private readonly toastr: ToastrService
  ) {
    this.isKrakonos = this.username.toLowerCase().includes('krakonos')
  }

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

  get access_token() {
    return this.authService.getAccessToken();
  }

  public refreshAcessTokenManually() {
    this.authService.refreshToken().then((
      (value) => {
        console.log(value)
        this.toastr.info(
          'cool',
          'Refresh',
          {
            progressBar: true
          }
        )
      }
    )).catch((err) => {
      this.toastr.error(
        err,
        'Error with refreshing',
        {
          progressBar: true
        }
      )
    })
  }
}
