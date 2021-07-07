import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'app/shared/services/toastr.service';
import { UsersRequestsService } from 'app/protected/services/users-requests.service';

import { GenericUser } from 'app/protected/interfaces/user/GenericUser.interface';
import { adminsRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.scss'],
})
export class AdminsListComponent implements OnInit {
  adminsList: GenericUser[];

  adminsBaseRoute: string = adminsRoutes.main;

  constructor(
    private toasterService: ToastrService,
    private userRequests: UsersRequestsService,
  ) {}

  ngOnInit(): void {
    this.userRequests.listAdmins().subscribe(
      (response) => {
        this.adminsList = response.body;
      },
      (error) => {
        this.toasterService.errorToastr(error.error.error);
      },
    );
  }

  onNameSearch(queryParam: string) {
    this.userRequests.listAdmins(queryParam).subscribe(
      (response) => {
        this.adminsList = response.body;
      },
      (error) => {
        this.toasterService.errorToastr('Búsqueda inválida');
      },
    );
  }
}
