import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Proyecto desarrollado por el Centro de Investigación, desarrollo e
      innovación en ingeniería mecatrónica (<a
        href="https://www.imt.ucb.edu.bo/cidimec/"
        >CIDIMEC</a
      >).
    </span>
  `,
})
export class FooterComponent {}
