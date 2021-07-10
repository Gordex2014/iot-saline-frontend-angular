import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { RecordsRequestsService } from 'app/protected/services/records-requests-services.service';

import { patientsRoutes } from 'app/protected/routes/protected.routes';
import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';
import { Record } from 'app/protected/interfaces/records/responses/PatientClinicalHistoryResponse.interface';

@Component({
  selector: 'ngx-view-patient-clinical-history',
  templateUrl: './view-patient-clinical-history.component.html',
  styleUrls: ['./view-patient-clinical-history.component.scss'],
})
export class ViewPatientClinicalHistoryComponent implements OnInit {
  patient: PatientDTO;
  records: Record[] | undefined;

  redirectOnCancelRoute: string = patientsRoutes.viewAll;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientsRequestService: PatientsRequestsService,
    private recordsRequestService: RecordsRequestsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Obtaining patient info
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
      // Obtaining records
      this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.recordsRequestService.listPatientClinicalHistory(id)),
      )
      .subscribe(
        (response) => {
          this.records = response.body.records;
        },
        (error) => {
          this.router.navigateByUrl(patientsRoutes.viewAll);
        },
      );
  }
}
