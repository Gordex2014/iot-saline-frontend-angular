import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ProtectedModule } from 'app/protected/protected.module';
import { PatientCreationComponent } from './patient-creation/patient-creation.component';
import { PatientInspectionComponent } from './patient-inspection/patient-inspection.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { AddPatientsRecordsComponent } from './add-patients-records/add-patients-records.component';


@NgModule({
  declarations: [PatientCreationComponent, PatientInspectionComponent, PatientsListComponent, AddPatientsRecordsComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ProtectedModule,
  ],
})
export class PatientsModule { }
