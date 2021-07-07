import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCreationComponent } from './admin-creation/admin-creation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: AdminCreationComponent,
      },
      {
        path: '**',
        redirectTo: 'register',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
