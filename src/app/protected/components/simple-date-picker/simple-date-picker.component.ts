import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-simple-date-picker',
  templateUrl: './simple-date-picker.component.html',
  styleUrls: ['./simple-date-picker.component.scss'],
})
export class SimpleDatePickerComponent {
  public datepickerForm: FormControl = new FormControl('');

  @Input() datePickerTitle: string = 'Fecha del registro';

  @Input() datePickerPlaceHolder: string = 'Ingrese la fecha';

  @Output() datePickerDate: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {}

  onDatePicked(inputElement: Date | null) {
    if (this.isInputAValidDate(inputElement)) {
      this.datePickerDate.emit(inputElement);
    } else {
      return;
    }
  }

  isInputAValidDate(date: any): boolean {
    return (
      date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !isNaN(date)
    );
  }
}
