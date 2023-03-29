import { Component } from '@angular/core';
import textData from "../../languages/en.json"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  rights = textData.footer.rights
  date = new Date().getFullYear()
}
