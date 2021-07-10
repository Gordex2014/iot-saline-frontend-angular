import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientRecordComponent } from './add-patient-record/add-patient-record.component';
import { AddPatientsRecordsListComponent } from './add-patients-records-list/add-patients-records-list.component';

import { PatientCreationComponent } from './patient-creation/patient-creation.component';
import { PatientInspectionComponent } from './patient-inspection/patient-inspection.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { ViewPatientClinicalHistoryComponent } from './view-patient-clinical-history/view-patient-clinical-history.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: PatientCreationComponent,
      },
      {
        path: 'view-all-patients',
        component: PatientsListComponent,
      },
      {
        path: 'edit/:id',
        component: PatientInspectionComponent,
      },
      {
        path: 'add-patients-records',
        component: AddPatientsRecordsListComponent,
      },
      {
        path: 'add-patient-record/:id',
        component: AddPatientRecordComponent,
      },
      {
        path: 'patient-history/:id',
        component: ViewPatientClinicalHistoryComponent,
      },
      {
        path: '**',
        redirectTo: 'view-all-patients',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
