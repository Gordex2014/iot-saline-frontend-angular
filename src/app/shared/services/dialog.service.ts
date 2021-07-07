import { Injectable } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

import { UserDeletionConfirmationComponent } from '../components/user-deletion-confirmation/user-deletion-confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialogService: NbDialogService) {}

  deletionConfirmationDialog(): NbDialogRef<UserDeletionConfirmationComponent> {
    return this.dialogService.open(UserDeletionConfirmationComponent);
  }
}
