import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-user-deletion-confirmation',
  templateUrl: './user-deletion-confirmation.component.html',
  styleUrls: ['./user-deletion-confirmation.component.scss'],
})
export class UserDeletionConfirmationComponent {
  constructor(protected ref: NbDialogRef<UserDeletionConfirmationComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(result: boolean) {
    this.ref.close(result);
  }
}
