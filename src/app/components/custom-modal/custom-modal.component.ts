import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {IJobPost} from "../../utils/types";
import textData from "../../languages/en.json"

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {

  @Output() OkClickEvent = new EventEmitter()
  @Input() currentJob?: IJobPost
  textData = textData

  handleOk() {
    this.OkClickEvent.emit()
  }
}
