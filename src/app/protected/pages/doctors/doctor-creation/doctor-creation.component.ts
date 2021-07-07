import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCreation } from 'app/protected/interfaces/user/User.interface';
import { doctorsRoutes } from 'app/protected/routes/protected.routes';
import { UsersRequestsService } from 'app/protected/services/users-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';

@Component({
  selector: 'ngx-doctor-creation',
  templateUrl: './doctor-creation.component.html',
  styleUrls: ['./doctor-creation.component.scss'],
})
export class DoctorCreationComponent implements OnInit {
  public redirectOnCancelRoute: string = doctorsRoutes.viewAll;

  constructor(
    private usersRequests: UsersRequestsService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onFormSubmission(doctorToCreate: UserCreation) {
    this.usersRequests.createDoctor(doctorToCreate).subscribe(
      ({ body }) => {
        this.toastrService.successToastr(
          'Médico creado',
          `Médico ${body.firstName} ${body.lastName} creado exitosamente`,
        );
        this.router.navigate([doctorsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr(error.error.error);
      },
    );
  }
}
