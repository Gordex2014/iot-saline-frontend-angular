import { Component, Input } from '@angular/core';
import { GenericUser } from 'app/protected/interfaces/user/GenericUser.interface';

@Component({
  selector: 'ngx-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss'],
})
export class UsersCardsComponent {
  constructor() {}

  @Input() users!: GenericUser[];

  @Input() baseRoute: string;

  @Input() cardTitle: string = 'Lista de usuarios';

  @Input() buttonAction: string = 'Editar';
}
