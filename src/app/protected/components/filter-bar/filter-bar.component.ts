import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  filter: FormControl = new FormControl('');

  constructor() {}

  @Input() filterPlaceholder: string = 'Nombre a filtrar';

  @Input() filterTitle: string = 'Filtrar por nombre';

  @Output() queryParam: EventEmitter<string> = new EventEmitter<string>();

  onSearchClick() {
    this.queryParam.emit(this.filter.value);
    this.filter.setValue('');
  }
}
