import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ProtectedModule } from 'app/protected/protected.module';
import { PatientCreationComponent } from './patient-creation/patient-creation.component';
import { PatientInspectionComponent } from './patient-inspection/patient-inspection.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { AddPatientsRecordsListComponent } from './add-patients-records-list/add-patients-records-list.component';
import { AddPatientRecordComponent } from './add-patient-record/add-patient-record.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NebularModule } from 'app/shared/nebular/nebular.module';
import { ViewPatientClinicalHistoryComponent } from './view-patient-clinical-history/view-patient-clinical-history.component';

@NgModule({
  declarations: [
    PatientCreationComponent,
    PatientInspectionComponent,
    PatientsListComponent,
    AddPatientsRecordsListComponent,
    AddPatientRecordComponent,
    ViewPatientClinicalHistoryComponent,
  ],
  imports: [CommonModule, EditorModule, PatientsRoutingModule, ProtectedModule],
})
export class PatientsModule {}
