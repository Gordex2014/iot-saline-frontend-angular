import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import { ActiveUser, ActiveUserRole } from 'app/auth/interfaces/ActiveUser.interface';

@Injectable({
  providedIn: 'root',
})
export class ActiveUserService {
  constructor(private authService: AuthService) {}

  get activeUser(): ActiveUser {
    return { ...this.authService.user };
  }

  get activeUserRole(): ActiveUserRole {
    return this.activeUser.role;
  }
}
