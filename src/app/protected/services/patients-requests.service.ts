import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

import { ListPatientByIDResponse } from 'app/protected/interfaces/patient/responses/ListPatientByIDResponse.interface';
import { ListPatientsResponse } from 'app/protected/interfaces/patient/responses/ListPatientsResponse.interface';
import { PatientCreation } from 'app/protected/interfaces/patient/Patient.interface';
import { PatientCreationResponse } from 'app/protected/interfaces/patient/responses/PatientCreationResponse.interface';
import { PatientModificationResponse } from 'app/protected/interfaces/patient/responses/PatientModificationResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class PatientsRequestsService {
  private headers = new HttpHeaders({
    'x-token': localStorage.getItem('token') || '',
  });

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  listPatients(filter?: string): Observable<ListPatientsResponse> {
    let url = this.baseUrl + '/patients';
    if (filter) url += `?filter=${filter}`;
    return this.http.get<ListPatientsResponse>(url, { headers: this.headers });
  }

  getPatientById(patientId: string): Observable<ListPatientByIDResponse> {
    const url = this.baseUrl + `/patients/${patientId}`;
    return this.http.get<ListPatientByIDResponse>(url, {
      headers: this.headers,
    });
  }

  createPatient(
    newPatient: PatientCreation,
  ): Observable<PatientCreationResponse> {
    const url = this.baseUrl + '/patients';

    const newPatientData: PatientCreation = {
      firstName: newPatient.firstName,
      lastName: newPatient.lastName,
      dateOfBirth: newPatient.dateOfBirth,
      gender: newPatient.gender,
      mobileNumber: newPatient.mobileNumber,
      ...(newPatient.imageURI && { imageURI: newPatient.imageURI }),
    };

    return this.http.post<PatientCreationResponse>(url, newPatientData, {
      headers: this.headers,
    });
  }

  modifyPatient(
    patientToModify: PatientCreation,
  ): Observable<PatientModificationResponse> {
    const url = this.baseUrl + `/patients/${patientToModify.id}`;

    const newPatientData: PatientCreation = {
      firstName: patientToModify.firstName,
      lastName: patientToModify.lastName,
      dateOfBirth: patientToModify.dateOfBirth,
      gender: patientToModify.gender,
      mobileNumber: patientToModify.mobileNumber,
      ...(patientToModify.imageURI && { imageURI: patientToModify.imageURI }),
    };

    return this.http.put<PatientModificationResponse>(url, newPatientData, {
      headers: this.headers,
    });
  }

  deletePatient(patientId: string): Observable<PatientModificationResponse> {
    const url = this.baseUrl + `/patients/${patientId}`;

    return this.http.delete<PatientModificationResponse>(url, {
      headers: this.headers,
    });
  }
}
