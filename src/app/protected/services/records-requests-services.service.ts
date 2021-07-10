import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

import { PatientClinicalHistoryResponse } from 'app/protected/interfaces/records/responses/PatientClinicalHistoryResponse.interface';
import { ClinicalRecordByIDResponse } from 'app/protected/interfaces/records/responses/ClinicalRecordByIdResponse.interface';
import { RecordCreationResponse } from '../interfaces/records/responses/RecordCreationResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class RecordsRequestsService {
  private headers = new HttpHeaders({
    'x-token': localStorage.getItem('token') || '',
  });

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  createRecord(
    patientId: string,
    dateTime: Date,
    medicalCondition: string,
  ): Observable<RecordCreationResponse> {
    const url = this.baseUrl + '/records';

    const newRecordData = {
      patient: patientId,
      dateTime,
      medicalCondition,
    };

    return this.http.post<RecordCreationResponse>(url, newRecordData, {
      headers: this.headers,
    });
  }

  modifyRecord(
    patientId: string,
    dateTime: Date,
    medicalCondition: string,
  ): Observable<RecordCreationResponse> {
    const url = this.baseUrl + `/records/${patientId}`;

    const newRecordData = {
      dateTime,
      medicalCondition,
    };

    return this.http.put<RecordCreationResponse>(url, newRecordData, {
      headers: this.headers,
    });
  }

  listPatientClinicalHistory(
    patientId: string,
  ): Observable<PatientClinicalHistoryResponse> {
    const url = this.baseUrl + `/records/patient/${patientId}`;
    return this.http.get<PatientClinicalHistoryResponse>(url, {
      headers: this.headers,
    });
  }

  getClinicalRecordById(
    recordId: string,
  ): Observable<ClinicalRecordByIDResponse> {
    const url = this.baseUrl + `/records/${recordId}`;
    return this.http.get<ClinicalRecordByIDResponse>(url, {
      headers: this.headers,
    });
  }
}
