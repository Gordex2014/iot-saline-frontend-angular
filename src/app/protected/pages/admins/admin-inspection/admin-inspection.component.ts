import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UserCreation,
  UserDTO,
} from 'app/protected/interfaces/user/User.interface';
import { adminsRoutes } from 'app/protected/routes/protected.routes';
import { UsersRequestsService } from 'app/protected/services/users-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-admin-inspection',
  templateUrl: './admin-inspection.component.html',
  styleUrls: ['./admin-inspection.component.scss'],
})
export class AdminInspectionComponent implements OnInit {
  admin: UserDTO;

  redirectOnCancelRoute: string = adminsRoutes.viewAll;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersRequestsService: UsersRequestsService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.usersRequestsService.getAdminById(id)))
      .subscribe(
        (response) => {
          this.admin = response.body;
        },
        (error) => {
          this.router.navigate([adminsRoutes.viewAll]);
        },
      );
  }

  onFormSubmission(adminToUpdate: UserCreation) {
    this.usersRequestsService.modifyUser(adminToUpdate).subscribe(
      (response) => {
        this.toastrService.successToastr(
          'Administrador modificado',
          `Administrador modificado exitosamente`,
        );
        this.router.navigate([adminsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr(error.error.error);
      },
    );
  }

  onAdminDeletion(id: string) {
    this.usersRequestsService.deleteAdmin(id).subscribe(
      (response) => {
        this.toastrService.successToastr(
          'Administrador eliminado',
          `Administrador eliminado exitosamente`,
        );
        this.router.navigate([adminsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr(error.error.error);
      },
    );
  }
}
