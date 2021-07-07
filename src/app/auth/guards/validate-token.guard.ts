import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from 'app/auth/services/auth.service';
import { loginRoute } from '../routes/auth.routes';

@Injectable({
  providedIn: 'root',
})
export class ValidateTokenGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.renewToken().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigateByUrl(loginRoute);
        }
      }),
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.authService.renewToken().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigateByUrl(loginRoute);
        }
      }),
    );
  }
}
