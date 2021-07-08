import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';
import {
  PatientCreation,
  PatientDTO,
} from 'app/protected/interfaces/patient/Patient.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-patient-inspection',
  templateUrl: './patient-inspection.component.html',
  styleUrls: ['./patient-inspection.component.scss'],
})
export class PatientInspectionComponent implements OnInit {
  patient: PatientDTO;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientsRequestsService: PatientsRequestsService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.patientsRequestsService.getPatientById(id)),
      )
      .subscribe(
        (response) => {
          this.patient = response.body;
          this.patient.dateOfBirth = new Date(response.body.dateOfBirth);
        },
        (error) => {
          this.router.navigate([patientsRoutes.viewAll]);
        },
      );
  }

  onFormSubmission(patientToUpdate: PatientCreation) {
    this.patientsRequestsService.modifyPatient(patientToUpdate).subscribe(
      (response) => {
        this.toastrService.successToastr(
          'Paciente modificado',
          `Paciente modificado exitosamente`,
        );
        this.router.navigate([patientsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr(error.error.error);
      },
    );
  }

  onPatientDeletion(id: string) {
    this.patientsRequestsService.deletePatient(id).subscribe(
      (response) => {
        this.toastrService.successToastr(
          'Paciente eliminado',
          `Paciente eliminado exitosamente`,
        );
        this.router.navigate([patientsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr(error.error.error);
      },
    );
  }
}
