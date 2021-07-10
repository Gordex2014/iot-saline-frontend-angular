import { Component, Input } from '@angular/core';

import { Record } from 'app/protected/interfaces/records/responses/PatientClinicalHistoryResponse.interface';
import { patientsRoutes } from 'app/protected/routes/protected.routes';

@Component({
  selector: 'ngx-simple-record',
  templateUrl: './simple-record.component.html',
  styleUrls: ['./simple-record.component.scss'],
})
export class SimpleRecordComponent {
  public recordEditionBaseRoute: string = patientsRoutes.editSinglePatientRecordBase;

  @Input() record: Record | undefined;

  constructor() {}
}
