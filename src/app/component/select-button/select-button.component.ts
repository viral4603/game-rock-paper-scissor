import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent {
  @Input() public decided!:boolean;
  @Input() public set buttonName(v: string) {
    this._buttonName = v;
  }
  @Output() public userSelect: EventEmitter<string> = new EventEmitter<string>

  public get buttonType(): string { 
    return this._buttonName;
  }
  private _buttonName!: string;

  public selectValue(value: any) {
    this.userSelect.emit(value)
  }

}
