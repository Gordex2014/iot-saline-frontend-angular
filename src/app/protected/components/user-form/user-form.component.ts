import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DialogService } from 'app/shared/services/dialog.service';
import {
  UserCreation,
  UserDTO,
} from 'app/protected/interfaces/user/User.interface';
import { dashboardRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public adminDoctorForm: FormGroup;

  public displayErrorAlert: boolean = false;
  public errorAlertMessage: string = '';

  public deleteButtonHidden: boolean = true;

  private passwordValidator = [Validators.minLength(6), Validators.required];

  private imageHasChanged: boolean = false;

  constructor(private fb: FormBuilder, private dialogService: DialogService) {}

  @Input() user: UserDTO | undefined;

  @Input() formTitle: string = 'Nuevo usuario';

  @Input() confirmationButtonMessage: string = 'Registrar';

  @Input() passwordRequired: boolean = true;

  @Input() redirectOnCancelRoute: string = dashboardRoutes.main;

  @Output() userCreation: EventEmitter<UserCreation> =
    new EventEmitter<UserCreation>();

  @Output() userDeletion: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.adminDoctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      password: '',
      password2: '',
      image: '',
    });

    if (this.passwordRequired) {
      this.adminDoctorForm
        .get('password')
        ?.setValidators(this.passwordValidator);
      this.adminDoctorForm
        .get('password2')
        ?.setValidators(this.passwordValidator);
    }

    if (this.user !== undefined) {
      this.adminDoctorForm.patchValue(this.user);
      this.deleteButtonHidden = false;
      if (this.user.imageUrl) {
        this.adminDoctorForm.get('image').setValue(this.user.imageUrl);
      }
    }
  }

  onFormSubmit() {
    if (!this.passwordComparison()) return;
    this.userCreation.emit({
      firstName: this.adminDoctorForm.get('firstName').value,
      lastName: this.adminDoctorForm.get('lastName').value,
      email: this.adminDoctorForm.get('email').value,
      username: this.adminDoctorForm.get('username').value,
      mobileNumber: this.adminDoctorForm.get('mobileNumber').value,
      ...(this.imageHasChanged && {
        imageURI: this.adminDoctorForm.get('image').value,
      }),
      ...(this.adminDoctorForm.get('password').value && {
        password: this.adminDoctorForm.get('password').value,
      }),
      ...(this.user && { id: this.user.id }),
    });
  }

  onImageChange(imageURI: string) {
    this.adminDoctorForm.get('image').setValue(imageURI);
    this.imageHasChanged = true;
  }

  onUserDeletion() {
    this.dialogService
      .deletionConfirmationDialog()
      .onClose.subscribe((confirmation) => {
        if (confirmation) {
          this.userDeletion.emit(this.user.id);
        }
      });
  }

  passwordComparison(): boolean {
    const equalPasswords =
      this.adminDoctorForm.get('password').value ===
      this.adminDoctorForm.get('password2').value
        ? true
        : false;
    if (!equalPasswords) {
      this.displayErrorAlert = true;
      this.errorAlertMessage = 'Las contraseñas no coinciden';
    } else {
      this.displayErrorAlert = false;
      this.errorAlertMessage = '';
    }
    return equalPasswords;
  }
}
