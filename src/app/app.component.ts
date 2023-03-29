import {Component} from '@angular/core';
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./sso.congig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn()
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig)
    this.oauthService.tokenValidationHandler = new JwksValidationHandler()
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
  }

  signIn() {
    this.oauthService.initImplicitFlow()
  }

  signOut() {
    this.oauthService.logOut()
  }

  get token(): string | null {
    let result: string = this.oauthService.getIdToken()
    return result ? result : null
  }
}
