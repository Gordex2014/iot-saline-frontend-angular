import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private nbToastrService: NbToastrService) {}

  errorToastr(errorMessage: string): void {
    this.nbToastrService.show(errorMessage, 'Error', {
      status: 'danger',
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      duration: 6000,
      hasIcon: true,
    });
  }

  successToastr(toastrTitle: string, successMessage: string): void {
    this.nbToastrService.show(successMessage, toastrTitle, {
      status: 'success',
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      duration: 6000,
      hasIcon: true,
    });
  }
}
