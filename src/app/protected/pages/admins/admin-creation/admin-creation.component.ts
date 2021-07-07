import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersRequestsService } from 'app/protected/services/users-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';

import { adminsRoutes } from 'app/protected/routes/protected.routes';
import { UserCreation } from 'app/protected/interfaces/user/User.interface';

@Component({
  selector: 'ngx-admin-creation',
  templateUrl: './admin-creation.component.html',
  styleUrls: ['./admin-creation.component.scss'],
})
export class AdminCreationComponent implements OnInit {
  public redirectOnCancelRoute: string = adminsRoutes.viewAll;
  constructor(
    private usersRequests: UsersRequestsService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onFormSubmission(adminToCreate: UserCreation) {
    this.usersRequests.createAdmin(adminToCreate).subscribe(
      ({ body }) => {
        this.toastrService.successToastr(
          'Administrador creado',
          `Administrador ${body.firstName} ${body.lastName} creado exitosamente`,
        );
        this.router.navigate([adminsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr(error.error.error);
      },
    );
  }
}
