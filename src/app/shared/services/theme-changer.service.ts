import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

enum Themes {
  Default = 'default',
  Dark = 'dark',
  Cosmic = 'cosmic',
  Corporate = 'corporate',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeChangerService {
  constructor(private themeService: NbThemeService) {}

  setDarkTheme() {
    this.changeTheme(Themes.Dark);
  }

  setDefaultTheme() {
    this.changeTheme(Themes.Default);
  }

  setCosmicTheme() {
    this.changeTheme(Themes.Cosmic);
  }

  setCorporateTheme() {
    this.changeTheme(Themes.Corporate);
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }
}
