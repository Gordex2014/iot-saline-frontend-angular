import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from 'app/shared/services/validator.service';

import { loginRoute } from '../../routes/auth.routes';

type InputColor = 'danger' | 'primary';

@Component({
  selector: 'ngx-password-request',
  templateUrl: './password-request.component.html',
  styleUrls: ['./password-request.component.scss'],
})
export class PasswordRequestComponent implements OnInit {
  public loginRoute: string = loginRoute;

  passwordRequestForm: FormGroup = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern(this.vs.emailPattern)],
    ],
  });

  get emailErrorMsg(): string {
    const error = this.passwordRequestForm.get('email')?.errors;
    if (error?.required) return 'El correo es obligatorio.';
    if (error?.pattern) return 'Se debe ingresar un correo.';
    return '';
  }

  get emailInputColor(): InputColor {
    const error = this.passwordRequestForm.get('email')?.errors;
    const untouched = this.passwordRequestForm.get('email')?.untouched;
    if (untouched) return 'primary';
    if (error?.required) return 'danger';
    if (error?.pattern) return 'danger';
    return 'primary';
  }

  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  inputValidation(input: string) {
    return (
      this.passwordRequestForm.get(input)?.invalid &&
      this.passwordRequestForm.get(input)?.touched
    );
  }

  ngOnInit(): void {}

  sendRequest() {
    console.log(this.passwordRequestForm.value); // TODO: Password request service
    this.passwordRequestForm.markAllAsTouched();
  }
}
