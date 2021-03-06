import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';
import { ToastrService } from 'app/shared/services/toastr.service';
import { RecordsRequestsService } from 'app/protected/services/records-requests-services.service';

@Component({
  selector: 'ngx-add-patient-record',
  templateUrl: './add-patient-record.component.html',
  styleUrls: ['./add-patient-record.component.scss'],
})
export class AddPatientRecordComponent implements OnInit {
  patient: PatientDTO;

  redirectOnCancelRoute: string = patientsRoutes.addRecords;

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
      .pipe(
        switchMap(({ id }) => this.patientsRequestService.getPatientById(id)),
      )
      .subscribe(
        (response) => {
          this.patient = response.body;
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

  addRecord() {
    this.recordRequestsService
      .createRecord(
        this.patient.id,
        this.recordDateTime,
        this.recordMedicalCondition,
      )
      .subscribe(
        ({ body }) => {
          this.toastrService.successToastr(
            'Registro creado',
            'Registro creado correctamente',
          );
          this.router.navigate([patientsRoutes.addRecords]);
        },
        (error) => {
          this.toastrService.errorToastr(error.error.error);
        },
      );
  }
}
