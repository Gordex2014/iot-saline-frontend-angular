import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorCreationComponent } from './doctor-creation/doctor-creation.component';
import { DoctorInspectionComponent } from './doctor-inspection/doctor-inspection.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: DoctorCreationComponent,
      },
      {
        path: 'view-all-doctors',
        component: DoctorsListComponent,
      },
      {
        path: ':id',
        component: DoctorInspectionComponent,
      },
      {
        path: '**',
        redirectTo: 'view-all-doctors',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
