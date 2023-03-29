import {Component, EventEmitter, Output} from '@angular/core';
import textData from '../../languages/en.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() signInClickEvent = new EventEmitter
  textData = textData

  signIn() {
    this.signInClickEvent.emit()
  }
}
