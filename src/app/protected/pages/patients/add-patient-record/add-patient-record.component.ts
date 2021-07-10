import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-add-patient-record',
  templateUrl: './add-patient-record.component.html',
  styleUrls: ['./add-patient-record.component.scss'],
})
export class AddPatientRecordComponent implements OnInit {
  patient: PatientDTO;

  redirectOnCancelRoute: string = patientsRoutes.viewAll;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientsRequestService: PatientsRequestsService,
    private router: Router,
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

  // TODO: Add patient records to DB
}
