import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDeletionConfirmationComponent } from './components/user-deletion-confirmation/user-deletion-confirmation.component';
import { ImagePipe } from './pipes/image.pipe';
import { NebularModule } from './nebular/nebular.module';

@NgModule({
  declarations: [ImagePipe, UserDeletionConfirmationComponent],
  imports: [
    CommonModule,
    NebularModule,
  ],
  exports: [
    ImagePipe,
  ],
})
export class SharedModule { }
