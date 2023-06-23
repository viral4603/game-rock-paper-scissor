import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  @Output() public closeRulesModel: EventEmitter<any> = new EventEmitter<any>();
  /**
   * @description emit event for close rules model
   */
  public closeModal() {
    this.closeRulesModel.emit()
  }
}
