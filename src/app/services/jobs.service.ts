import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IJobPost} from "../utils/types";
import {catchError, throwError} from "rxjs";
import {ErrorService} from "./error.service";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})

export class JobPostService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private oauthService: OAuthService
  ) {
  }

  getAll() {
    return this.http.get<IJobPost[]>('https://stage.api.recruitment.indigo.si/JobPost', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.oauthService.getIdToken()}`
      }),
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
