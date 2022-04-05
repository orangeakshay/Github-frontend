import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      return of(err.message);
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse(localStorage.getItem('currentUserTokenRDL')).idToken;
    if (token){
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
      });
    }else{
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        },
      });
    }
    return next.handle(request).pipe(catchError(x => this.handleAuthError(x)));
  }
}
