import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { RecordsRequestsService } from 'app/protected/services/records-requests-services.service';
import { patientsRoutes } from 'app/protected/routes/protected.routes';
import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';
import { Record } from 'app/protected/interfaces/records/responses/PatientClinicalHistoryResponse.interface';
import { ToastrService } from 'app/shared/services/toastr.service';

@Component({
  selector: 'ngx-edit-patient-record',
  templateUrl: './edit-patient-record.component.html',
  styleUrls: ['./edit-patient-record.component.scss'],
})
export class EditPatientRecordComponent implements OnInit {
  patientId: string | undefined;
  patient: PatientDTO | undefined;
  record: Record | undefined;
  recordId!: string;

  redirectOnCancelRoute: string = patientsRoutes.viewPatientHistoryBase;

  recordDateTime!: Date;
  recordMedicalCondition!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientsRequestService: PatientsRequestsService,
    private recordRequestsService: RecordsRequestsService,
    private router: Router,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(tap(({ id }) => (this.recordId = id)))
      .pipe(
        switchMap(({ id }) =>
          this.recordRequestsService.getClinicalRecordById(id),
        ),
      )
      .subscribe(
        (response) => {
          this.record = response.body;
          this.patientId = response.body.patient.id;
          this.patientsRequestService.getPatientById(this.patientId).subscribe(
            (patientRes) => {
              this.patient = patientRes.body;
            },
            (patientError) => {
              this.router.navigateByUrl(patientsRoutes.viewAll);
            },
          );
        },
        (error) => {
          this.router.navigateByUrl(patientsRoutes.viewAll);
        },
      );
  }

  onTextAreaEventEmission(textAreaValue: string): void {
    this.recordMedicalCondition = textAreaValue;
  }

  onDatePickerEventEmission(datePickerValue: Date): void {
    this.recordDateTime = datePickerValue;
  }

  editRecord() {
    this.recordRequestsService
      .modifyRecord(
        this.recordId,
        this.recordDateTime,
        this.recordMedicalCondition,
      )
      .subscribe(
        (response) => {
          this.toastrService.successToastr(
            'Registro modificado',
            'Registro modificado',
          );
          this.router.navigate([patientsRoutes.addRecords]);
        },
        (error) => {
          this.toastrService.errorToastr(error.error.error);
        },
      );
  }
}
