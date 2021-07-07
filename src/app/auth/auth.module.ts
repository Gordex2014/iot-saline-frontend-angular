import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NbAuthModule } from '@nebular/auth';

import { AuthRoutingModule } from './auth-routing.module';
import { NebularModule } from 'app/shared/nebular/nebular.module';

import { LoginComponent } from './pages/login/login.component';
import { PasswordRequestComponent } from './pages/password-request/password-request.component';

@NgModule({
  declarations: [LoginComponent, PasswordRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AuthRoutingModule,
    NebularModule,
    NbAuthModule,
  ],
})
export class AuthModule {}
