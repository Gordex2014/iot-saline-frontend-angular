import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';

import { ProtectedRoutingModule } from './protected-routing.module';

import { NebularModule } from 'app/shared/nebular/nebular.module';
import { SharedModule } from 'app/shared/shared.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { InputImgComponent } from './components/input-img/input-img.component';
import { UsersCardsComponent } from './components/users-cards/users-cards.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { RecordsCardsComponent } from './components/records-cards/records-cards.component';
import { UserInfoCardComponent } from './components/user-info-card/user-info-card.component';
import { SimpleDatePickerComponent } from './components/simple-date-picker/simple-date-picker.component';
import { SimpleTextAreaComponent } from './components/simple-text-area/simple-text-area.component';
import { PatientInfoCardComponent } from './components/patient-info-card/patient-info-card.component';
import { SimpleRecordComponent } from './components/simple-record/simple-record.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FilterBarComponent,
    InputImgComponent,
    LayoutComponent,
    PatientFormComponent,
    PatientInfoCardComponent,
    RecordsCardsComponent,
    SimpleDatePickerComponent,
    SimpleTextAreaComponent,
    UserFormComponent,
    UserInfoCardComponent,
    UsersCardsComponent,
    SimpleRecordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ProtectedRoutingModule,
    NbMenuModule,
    ThemeModule,
    NebularModule,
    SharedModule,
  ],
  exports: [
    FilterBarComponent,
    InputImgComponent,
    PatientFormComponent,
    PatientInfoCardComponent,
    RecordsCardsComponent,
    SimpleDatePickerComponent,
    SimpleTextAreaComponent,
    UserFormComponent,
    UserInfoCardComponent,
    UsersCardsComponent,
  ],
})
export class ProtectedModule {}
