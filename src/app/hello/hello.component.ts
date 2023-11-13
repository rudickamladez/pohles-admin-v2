import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  login: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.login = p['login'];
      if (this.login) {
        this.router.navigate(['/login']);
      } else if (this.authService.hasValidAccessToken()) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
