import { Component, OnInit } from '@angular/core';

import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';

import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  patientsList: PatientDTO[];

  patientEditionRoute: string = patientsRoutes.editPatientBase;

  constructor(
    private toasterService: ToastrService,
    private patientsRequests: PatientsRequestsService,
  ) {}

  ngOnInit(): void {
    this.patientsRequests.listPatients().subscribe(
      (response) => {
        this.patientsList = response.body;
      },
      (error) => {
        this.toasterService.errorToastr(error.error.error);
      },
    );
  }

  onNameSearch(queryParam: string) {
    this.patientsRequests.listPatients(queryParam).subscribe(
      (response) => {
        this.patientsList = response.body;
      },
      (error) => {
        this.toasterService.errorToastr('Búsqueda inválida');
      },
    );
  }
}
