import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCreationComponent } from './admin-creation/admin-creation.component';
import { AdminInspectionComponent } from './admin-inspection/admin-inspection.component';
import { AdminsListComponent } from './admins-list/admins-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: AdminCreationComponent,
      },
      {
        path: 'view-all-admins',
        component: AdminsListComponent,
      },
      {
        path: ':id',
        component: AdminInspectionComponent,
      },
      {
        path: '**',
        redirectTo: 'view-all-admins',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
