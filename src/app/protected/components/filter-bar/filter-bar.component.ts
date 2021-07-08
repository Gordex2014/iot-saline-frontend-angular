import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbThemeService } from '@nebular/theme';

type ButtonFontSize = 'tiny' | 'small';

@Component({
  selector: 'ngx-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  filter: FormControl = new FormControl('');
  screenSizeBig: boolean = false;

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

  @Input() filterPlaceholder: string = 'Nombre a filtrar';

  @Input() filterTitle: string = 'Filtrar por nombre';

  @Output() queryParam: EventEmitter<string> = new EventEmitter<string>();

  onSearchClick() {
    this.queryParam.emit(this.filter.value);
    this.filter.setValue('');
  }
}
