import {Component, EventEmitter, Input, Output} from '@angular/core';
import textData from "../../languages/en.json"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() token: string | null
  @Output() signInClickEvent = new EventEmitter
  @Output() signOutClickEvent = new EventEmitter
  textData = textData

  signIn() {
    this.signInClickEvent.emit()
  }

  signOut() {
    this.signOutClickEvent.emit()
  }
}
