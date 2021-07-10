import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';

type ButtonFontSize = 'tiny' | 'small';
type CardFontSize = 'tiny' | 'large';

@Component({
  selector: 'ngx-records-cards',
  templateUrl: './records-cards.component.html',
  styleUrls: ['./records-cards.component.scss'],
})
export class RecordsCardsComponent implements OnInit {
  viewHistoryBaseRoute: string = patientsRoutes.viewPatientHistoryBase;
  addSingleRecordBaseRoute: string = patientsRoutes.addSinglePatientRecordBase;

  screenSizeBig: boolean = false;

  cardTitle: string = 'Lista de pacientes';

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

  get historyButtonTag(): string {
    return this.screenSizeBig ? 'Historia clínica' : 'H';
  }

  get addRecordButtonTag(): string {
    return this.screenSizeBig ? 'Agregar registro' : '+';
  }

  @Input() users!: PatientDTO[];
}
