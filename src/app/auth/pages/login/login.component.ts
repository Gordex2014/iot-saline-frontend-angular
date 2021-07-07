import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from 'app/auth/services/auth.service';
import { dashboardRoutes } from 'app/protected/routes/protected.routes';

import { ValidatorService } from 'app/shared/services/validator.service';

import { passwordRequestRoute } from '../../routes/auth.routes';

type InputColor = 'success' | 'danger' | 'primary';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public passwordRequestRoute: string = passwordRequestRoute;

  loginForm: FormGroup = this.fb.group({
    credential: [
      '',
      [Validators.required, Validators.pattern(this.vs.noBlankSpacesPatter)],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get credentialErrorMsg(): string {
    const error = this.loginForm.get('credential')?.errors;
    if (error?.required) return 'Nombre de usuario o correo obligatorio.';
    if (error?.pattern) return 'Este campo no puede contener espacios.';
    return '';
  }

  get passwordErrorMsg(): string {
    const error = this.loginForm.get('password')?.errors;
    if (error.required) return 'La contraseña es obligatoria.';
    if (error.minlength)
      return 'La contraseña debe ser de al menos 6 caracteres.';
    return '';
  }

  get credentialInputColor(): InputColor {
    const error = this.loginForm.get('credential')?.errors;
    const untouched = this.loginForm.get('credential')?.untouched;
    if (untouched) return 'primary';
    if (error?.required) return 'danger';
    if (error?.pattern) return 'danger';
    return 'success';
  }

  get passwordInputColor(): InputColor {
    const error = this.loginForm.get('password')?.errors;
    const untouched = this.loginForm.get('password')?.untouched;
    if (untouched) return 'primary';
    if (error?.required) return 'danger';
    if (error?.minlength) return 'danger';
    return 'success';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  inputValidation(input: string) {
    return (
      this.loginForm.get(input)?.invalid && this.loginForm.get(input)?.touched
    );
  }

  login() {
    const { credential, password } = this.loginForm.value;

    this.authService.login(credential, password).subscribe((valid) => {
      if (valid === true) {
        this.router.navigateByUrl(dashboardRoutes.main);
      } else {
        Swal.fire({
          icon: 'error',
          title: valid,
          showConfirmButton: true,
          confirmButtonColor: '#d9534f',
        });
      }
    });
    this.loginForm.markAsUntouched();
  }
}
