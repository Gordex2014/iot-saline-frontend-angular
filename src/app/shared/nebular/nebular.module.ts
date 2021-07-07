import { NgModule } from '@angular/core';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbMenuModule,
  NbRadioModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbToastrModule,
  NbUserModule,
} from '@nebular/theme';

@NgModule({
  exports: [
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbDialogModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbMenuModule,
    NbRadioModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbToastrModule,
    NbUserModule,
  ],
})
export class NebularModule {}
