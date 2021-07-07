import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminCreationComponent } from './admin-creation/admin-creation.component';
import { ProtectedModule } from 'app/protected/protected.module';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { AdminInspectionComponent } from './admin-inspection/admin-inspection.component';


@NgModule({
  declarations: [AdminCreationComponent, AdminsListComponent, AdminInspectionComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    ProtectedModule,
  ],
})
export class AdminsModule { }
