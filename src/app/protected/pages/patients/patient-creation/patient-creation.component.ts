import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';

import { PatientCreation } from 'app/protected/interfaces/patient/Patient.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-patient-creation',
  templateUrl: './patient-creation.component.html',
  styleUrls: ['./patient-creation.component.scss'],
})
export class PatientCreationComponent implements OnInit {
  constructor(
    private patientsRequestsService: PatientsRequestsService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onFormSubmission(patient: PatientCreation) {
    this.patientsRequestsService.createPatient(patient).subscribe(
      ({ body }) => {
        this.toastrService.successToastr(
          'Paciente creado',
          `Paciente ${body.firstName} ${body.lastName} ha sido creado exitosamente`,
        );
        this.router.navigate([patientsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr(error.error.error);
      },
    );
  }
}
