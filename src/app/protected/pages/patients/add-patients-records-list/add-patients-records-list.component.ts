import { Component, OnInit } from '@angular/core';
import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';
import { PatientsRequestsService } from 'app/protected/services/patients-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';

@Component({
  selector: 'ngx-add-patients-records-list',
  templateUrl: './add-patients-records-list.component.html',
  styleUrls: ['./add-patients-records-list.component.scss'],
})
export class AddPatientsRecordsListComponent implements OnInit {
  patientsList: PatientDTO[];

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
}
