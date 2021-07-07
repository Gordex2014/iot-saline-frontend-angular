import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { ProtectedModule } from 'app/protected/protected.module';
import { DoctorCreationComponent } from './doctor-creation/doctor-creation.component';
import { DoctorInspectionComponent } from './doctor-inspection/doctor-inspection.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';


@NgModule({
  declarations: [DoctorCreationComponent, DoctorInspectionComponent, DoctorsListComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    ProtectedModule,
  ],
})
export class DoctorsModule { }
