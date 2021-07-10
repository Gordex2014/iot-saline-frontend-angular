import { Component, Input } from '@angular/core';
import { PatientDTO } from 'app/protected/interfaces/patient/Patient.interface';

@Component({
  selector: 'ngx-patient-info-card',
  templateUrl: './patient-info-card.component.html',
  styleUrls: ['./patient-info-card.component.scss'],
})
export class PatientInfoCardComponent {
  @Input() patient: PatientDTO | undefined;

  constructor() {}
}
