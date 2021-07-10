import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-simple-text-area',
  templateUrl: './simple-text-area.component.html',
  styleUrls: ['./simple-text-area.component.scss'],
})
export class SimpleTextAreaComponent implements OnInit {
  public textAreaData: string = '';

  @Input() inputText: string | undefined;

  @Input() textAreaTitle: string = 'Nuevo registro clínico del paciente';

  @Input() textAreaPlaceHolder: string = 'Nueva entrada';

  @Output() textAreaValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    if (this.inputText !== undefined) {
      this.textAreaData = this.inputText;
    }
  }

  onTextAreaChange(data: string) {
    this.textAreaValue.emit(data);
  }
}
