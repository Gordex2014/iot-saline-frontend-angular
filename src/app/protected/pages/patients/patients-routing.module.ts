import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientsRecordsComponent } from './add-patients-records/add-patients-records.component';

import { PatientCreationComponent } from './patient-creation/patient-creation.component';
import { PatientInspectionComponent } from './patient-inspection/patient-inspection.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

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
        component: AddPatientsRecordsComponent,
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
