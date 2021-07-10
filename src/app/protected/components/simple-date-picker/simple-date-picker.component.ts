import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-simple-date-picker',
  templateUrl: './simple-date-picker.component.html',
  styleUrls: ['./simple-date-picker.component.scss'],
})
export class SimpleDatePickerComponent implements OnInit {
  public datepickerForm: FormControl | undefined;

  @Input() inputDate: Date | undefined;

  @Input() datePickerTitle: string = 'Fecha del registro';

  @Input() datePickerPlaceHolder: string = 'Ingrese la fecha';

  @Output() datePickerDate: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {}

  ngOnInit(): void {
    if (this.inputDate !== undefined) {
      this.datepickerForm = new FormControl(new Date(this.inputDate));
    } else {
      this.datepickerForm = new FormControl('');
    }
  }

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
