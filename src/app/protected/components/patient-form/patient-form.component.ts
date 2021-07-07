import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DialogService } from 'app/shared/services/dialog.service';

import {
  PatientCreation,
  PatientDTO,
} from 'app/protected/interfaces/patient/Patient.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
})
export class PatientFormComponent implements OnInit {
  public patientForm: FormGroup;

  public displayErrorAlert: boolean = false;
  public errorAlertMessage: string = '';

  public deleteButtonHidden: boolean = true;

  private imageHasChanged: boolean = false;

  constructor(private fb: FormBuilder, private dialogService: DialogService) {}

  @Input() patient: PatientDTO | undefined;

  @Input() formTitle: string = 'Nuevo paciente';

  @Input() confirmationButtonMessage: string = 'Registrar';

  @Input() redirectOnCancelRoute: string = patientsRoutes.viewAll;

  @Output() patientCreation: EventEmitter<PatientCreation> = new EventEmitter<PatientCreation>();

  @Output() patientDeletion: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      mobileNumber: '',
      image: '',
    });

    if (this.patient !== undefined) {
      this.patientForm.patchValue(this.patient);
      this.deleteButtonHidden = false;
      if (this.patient.imageUrl) {
        this.patientForm.get('image').setValue(this.patient.imageUrl);
      }
    }
  }

  onImageChange(imageURI: string) {
    this.patientForm.get('image').setValue(imageURI);
    this.imageHasChanged = true;
  }

  onPatientDeletion() {
    this.dialogService
      .deletionConfirmationDialog()
      .onClose.subscribe((confirmation) => {
        if (confirmation) {
          this.patientDeletion.emit(this.patient.id);
        }
      });
  }

  onFormSubmit() {
    this.patientCreation.emit({
      firstName: this.patientForm.get('firstName').value,
      lastName: this.patientForm.get('lastName').value,
      dateOfBirth: this.patientForm.get('dateOfBirth').value,
      gender: this.patientForm.get('gender').value,
      mobileNumber: this.patientForm.get('mobileNumber').value,
      ...(this.imageHasChanged && {
        imageURI: this.patientForm.get('image').value,
      }),
      ...(this.patient && { id: this.patient.id }),
    });
  }

  isFormInvalid(): boolean {
    if (
      this.patientForm.get('firstName').value !== '' &&
      this.patientForm.get('lastName').value !== '' &&
      this.patientForm.get('gender').value !== '' &&
      this.patientForm.get('mobileNumber').value !== '' &&
      this.isDateOfBirthADate(this.patientForm.get('dateOfBirth').value)
    ) {
      return false;
    } else {
      return true;
    }
  }

  isDateOfBirthADate(date: any): boolean {
    return (
      date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !isNaN(date)
    );
  }
}
