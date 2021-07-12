import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { TokenHeaderService } from './token-header.service';

import { GetUserByIDResponse } from 'app/protected/interfaces/user/responses/GetUserByIdResponse.interface';
import { ListUsersResponse } from 'app/protected/interfaces/user/responses/ListUsersResponse.interface';
import { UserCreationResponse } from 'app/protected/interfaces/user/responses/UserCreationResponse.interface';
import { UserModificationResponse } from 'app/protected/interfaces/user/responses/UserModificationResponse.interface';
import { UserCreation } from 'app/protected/interfaces/user/User.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersRequestsService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private tokenService: TokenHeaderService,
  ) {}

  listDoctors(filter?: string): Observable<ListUsersResponse> {
    let url = this.baseUrl + '/users/doctors';
    if (filter) url += `?filter=${filter}`;
    return this.http.get<ListUsersResponse>(url, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  listAdmins(filter?: string): Observable<ListUsersResponse> {
    let url = this.baseUrl + '/users/admins';
    if (filter) url += `?filter=${filter}`;
    return this.http.get<ListUsersResponse>(url, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  getDoctorById(id: string): Observable<GetUserByIDResponse> {
    const url = this.baseUrl + `/users/doctors/${id}`;
    return this.http.get<GetUserByIDResponse>(url, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  getAdminById(id: string): Observable<GetUserByIDResponse> {
    const url = this.baseUrl + `/users/admins/${id}`;
    return this.http.get<GetUserByIDResponse>(url, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  createDoctor(newDoctor: UserCreation): Observable<UserCreationResponse> {
    const url = this.baseUrl + '/users';

    const newDoctorData = {
      firstName: newDoctor.firstName,
      lastName: newDoctor.lastName,
      email: newDoctor.email,
      mobileNumber: newDoctor.mobileNumber,
      username: newDoctor.username,
      password: newDoctor.password,
      roles: ['USER_DOCTOR_ROLE'],
      ...(newDoctor.imageURI && { imageURI: newDoctor.imageURI }),
    };

    return this.http.post<UserCreationResponse>(url, newDoctorData, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  createAdmin(newAdmin: UserCreation): Observable<UserCreationResponse> {
    const url = this.baseUrl + '/users';

    const newAdminData = {
      firstName: newAdmin.firstName,
      lastName: newAdmin.lastName,
      email: newAdmin.email,
      mobileNumber: newAdmin.mobileNumber,
      username: newAdmin.username,
      password: newAdmin.password,
      roles: ['USER_ADMIN_ROLE'],
      ...(newAdmin.imageURI && { imageURI: newAdmin.imageURI }),
    };

    return this.http.post<UserCreationResponse>(url, newAdminData, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  modifyUser(user: UserCreation): Observable<UserModificationResponse> {
    const url = this.baseUrl + `/users/${user.id}`;

    const userModifiedData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      username: user.username,
      ...(user.password && { password: user.password }),
      ...(user.imageURI && { imageURI: user.imageURI }),
    };

    return this.http.put<UserModificationResponse>(url, userModifiedData, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  deleteDoctor(doctorId: string): Observable<UserModificationResponse> {
    const url = this.baseUrl + `/users/doctors/${doctorId}`;
    return this.http.delete<UserModificationResponse>(url, {
      headers: this.tokenService.xTokenHeader,
    });
  }

  deleteAdmin(adminId: string): Observable<UserModificationResponse> {
    const url = this.baseUrl + `/users/admins/${adminId}`;
    return this.http.delete<UserModificationResponse>(url, {
      headers: this.tokenService.xTokenHeader,
    });
  }
}
