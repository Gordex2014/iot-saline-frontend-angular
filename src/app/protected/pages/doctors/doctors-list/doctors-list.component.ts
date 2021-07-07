import { Component, OnInit } from '@angular/core';
import { GenericUser } from 'app/protected/interfaces/user/GenericUser.interface';
import { doctorsRoutes } from 'app/protected/routes/protected.routes';
import { UsersRequestsService } from 'app/protected/services/users-requests.service';
import { ToastrService } from 'app/shared/services/toastr.service';

@Component({
  selector: 'ngx-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit {
  doctorsList: GenericUser[];

  doctorsBaseRoute: string = doctorsRoutes.main;

  constructor(
    private toasterService: ToastrService,
    private userRequests: UsersRequestsService,
  ) {}

  ngOnInit(): void {
    this.userRequests.listDoctors().subscribe(
      (response) => {
        this.doctorsList = response.body;
      },
      (error) => {
        this.toasterService.errorToastr(error.error.error);
      },
    );
  }

  onNameSearch(queryParam: string) {
    this.userRequests.listDoctors(queryParam).subscribe(
      (response) => {
        this.doctorsList = response.body;
      },
      (error) => {
        this.toasterService.errorToastr('Búsqueda inválida');
      },
    );
  }
}
