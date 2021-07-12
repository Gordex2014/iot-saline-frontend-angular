import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { ThemeChangerService } from 'app/shared/services/theme-changer.service';
import { AuthResponse } from 'app/auth/interfaces/AuthResponse.interface';
import { ActiveUser } from 'app/auth/interfaces/ActiveUser.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _user!: ActiveUser;

  get user() {
    return { ...this._user };
  }

  constructor(
    private http: HttpClient,
    private themeChangerService: ThemeChangerService,
  ) {}

  login(credential: string, password: string) {
    const url: string = `${this.baseUrl}/auth/login`;
    const body = { credential, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        localStorage.setItem('token', resp.body.token);
      }),
      map((_) => true),
      catchError((err) => of(err.error.error)),
    );
  }

  renewToken(): Observable<boolean> {
    const url: string = `${this.baseUrl}/auth/renew`;
    const headers: HttpHeaders = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        localStorage.setItem('token', resp.body.token);
        this._user = {
          firstName: resp.body.firstName,
          lastName: resp.body.lastName,
          id: resp.body.id,
          role: resp.body.role,
          imageUrl: resp.body.imageUrl,
        };
        return true;
      }),
      catchError((err) => of(false)),
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.themeChangerService.setDefaultTheme();
  }
}
