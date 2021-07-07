import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericUser } from 'app/protected/interfaces/user/GenericUser.interface';
import { toBase64 } from 'app/shared/utils/toBase64.helpers';
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

  @Output() inputImgSelectedFile: EventEmitter<File> = new EventEmitter<File>();

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
    toBase64(file).then((value) => (this.base64Image = value));
    this.inputImgSelectedFile.emit(file);
    this.genericUser = undefined;
  }
}
