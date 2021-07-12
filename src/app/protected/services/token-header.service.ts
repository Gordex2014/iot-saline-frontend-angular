import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenHeaderService {
  constructor() {}

  get xTokenHeader(): HttpHeaders {
    return new HttpHeaders({
      'x-token': this.accessToken,
    });
  }

  get accessToken(): string {
    return localStorage.getItem('token') || '';
  }
}
