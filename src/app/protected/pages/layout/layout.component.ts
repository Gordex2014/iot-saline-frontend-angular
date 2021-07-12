import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

import { ActiveUserService } from 'app/auth/services/active-user.service';
import { ThemeChangerService } from 'app/shared/services/theme-changer.service';
import { adminMenuItems } from './sidebar-admin-menu';
import { doctorMenuItems } from './sidebar-doctor-menu';

@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sidebarMenu: NbMenuItem[] = [];

  constructor(
    private activeUserService: ActiveUserService,
    private themeChangerService: ThemeChangerService,
  ) {}

  ngOnInit(): void {
    if (this.activeUserService.activeUserRole === 'USER_ADMIN_ROLE') {
      this.themeChangerService.setDarkTheme();
      this.sidebarMenu = adminMenuItems;
    } else {
      this.themeChangerService.setDefaultTheme();
      this.sidebarMenu = doctorMenuItems;
    }
  }
}
