import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from 'app/auth/services/auth.service';
import { Router } from '@angular/router';
import { loginRoute } from 'app/auth/routes/auth.routes';

enum UserMenuOptions {
  Profile = 'Perfil',
  LogOut = 'Cerrar Sesión',
}

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: ActiveUser;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [
    { title: UserMenuOptions.Profile },
    { title: UserMenuOptions.LogOut },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.user = this.authService.user;

    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl),
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe((themeName) => (this.currentTheme = themeName));

    this.menuService
      .onItemClick()
      .pipe(map(({ item: { title } }) => title))
      .subscribe((title) => {
        if (title === UserMenuOptions.LogOut) {
          this.logout();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl(loginRoute);
  }
}
