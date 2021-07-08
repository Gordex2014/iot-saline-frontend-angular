import { Component, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { GenericUser } from 'app/protected/interfaces/user/GenericUser.interface';

type ButtonFontSize = 'tiny' | 'small';
type CardFontSize = 'tiny' | 'large';

@Component({
  selector: 'ngx-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss'],
})
export class UsersCardsComponent implements OnInit  {
  screenSizeBig: boolean = false;

  constructor(private themeServiceService: NbThemeService) {}

  ngOnInit(): void {
    const $mediaQuery = this.themeServiceService.onMediaQueryChange();
    $mediaQuery.subscribe((mediaBreakPoint) => {
      const newValue = mediaBreakPoint[1];
      if (newValue.width <= 576) this.screenSizeBig = false;
      else this.screenSizeBig = true;
    });
  }

  get buttonFontSize(): ButtonFontSize {
    return this.screenSizeBig ? 'small' : 'tiny';
  }

  get cardFontSize(): CardFontSize {
    return this.screenSizeBig ? 'large' : 'tiny';
  }

  @Input() users!: GenericUser[];

  @Input() baseRoute: string;

  @Input() cardTitle: string = 'Lista de usuarios';

  @Input() buttonAction: string = 'Editar';
}
