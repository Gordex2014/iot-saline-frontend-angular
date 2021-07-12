import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UserCreation,
  UserDTO,
} from 'app/protected/interfaces/user/User.interface';
import { doctorsRoutes } from 'app/protected/routes/protected.routes';
import { UsersRequestsService } from 'app/protected/services/users-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-doctor-inspection',
  templateUrl: './doctor-inspection.component.html',
  styleUrls: ['./doctor-inspection.component.scss'],
})
export class DoctorInspectionComponent implements OnInit {
  doctor: UserDTO;
  redirectOnCancelRoute: string = doctorsRoutes.viewAll;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersRequestsService: UsersRequestsService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.usersRequestsService.getDoctorById(id)))
      .subscribe(
        (response) => {
          this.doctor = response.body;
        },
        (error) => {
          this.router.navigate([doctorsRoutes.viewAll]);
        },
      );
  }

  onFormSubmission(doctorToUpdate: UserCreation) {
    this.usersRequestsService.modifyUser(doctorToUpdate).subscribe(
      (response) => {
        this.toastrService.successToastr(
          'Médico modificado',
          `Médico modificado exitosamente`,
        );
        this.router.navigate([doctorsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr('Acción no permitida');
      },
    );
  }

  onDoctorDeletion(id: string) {
    this.usersRequestsService.deleteDoctor(id).subscribe(
      (response) => {
        this.toastrService.successToastr(
          'Médico eliminado',
          `Médico eliminado exitosamente`,
        );
        this.router.navigate([doctorsRoutes.viewAll]);
      },
      (error) => {
        this.toastrService.errorToastr('Acción no permitida');
      },
    );
  }
}
