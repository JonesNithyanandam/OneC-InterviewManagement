import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string = '';

  constructor(private http: HttpClient) { }

  public static handleError(error: any) {
    return observableThrowError(error || 'Server error');
  }

  public login(login: Login) {
    const url = 'auth/login';
    return this.http.post(url, login).pipe(
      catchError(AuthService.handleError)
    );
  }
}

