import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericUser } from 'app/protected/interfaces/user/GenericUser.interface';
import { toBase64URI } from 'app/shared/utils/toBase64URI.helpers';
import { UsersMock } from 'app/protected/mocks/Users.mock';

@Component({
  selector: 'ngx-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss'],
})
export class InputImgComponent implements OnInit {
  base64Image: string | undefined;

  constructor() {}

  @Input() genericUser: GenericUser | undefined;

  @Output() selectedInputImgURI: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.genericUser) {
      this.genericUser = UsersMock[0];
    }
  }

  onImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file: File = files[0];
    if (file.type.split('/')[0] !== 'image') return;
    toBase64URI(file).then((value) => {
      this.base64Image = value;
      this.selectedInputImgURI.emit(value);
    });
    this.genericUser = undefined;
  }
}
