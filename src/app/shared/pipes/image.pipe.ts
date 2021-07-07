import { Pipe, PipeTransform } from '@angular/core';
import { GenericUser } from 'app/protected/interfaces/user/GenericUser.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(user: GenericUser): string {
    if (user.imageUrl) {
      return user.imageUrl;
    } else {
      return '/assets/images/default-user.png';
    }
  }
}
