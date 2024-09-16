import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private readonly toastr: ToastrService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!this.authService.hasValidAccessToken()) {
            this.authService.refreshToken().then((
                (value) => {
                  console.log(value)
                  this.toastr.info(
                    'ok',
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
        if (
            this.authService.hasValidAccessToken() &&
            request.url.includes(environment.backend.api)
        ) {

            let headers = new HttpHeaders({
                'Authorization': this.authService.authorizationHeader()
            });

            if (request.headers.has("Content-Type")) {
                //@ts-ignore
                headers = headers.append('Content-Type', request.headers.get('Content-Type'));
            }
            const authRequest = request.clone(
                {
                    headers: headers
                }
            );
            return next.handle(authRequest);
        }
        return next.handle(request);
    }
}
