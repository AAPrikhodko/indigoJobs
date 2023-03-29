import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {DatePipe, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JobPostsComponent} from './pages/job-posts/job-posts.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {CustomTableComponent} from './components/custom-table/custom-table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {GlobalErrorComponent} from './components/global-error/global-error.component';
import {FilterJobsPipe} from './pipes/filter-jobs.pipe';
import {CustomModalComponent} from './components/custom-modal/custom-modal.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {OAuthModule} from "angular-oauth2-oidc";
import {LoginComponent} from './components/login/login.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    JobPostsComponent,
    HeaderComponent,
    FooterComponent,
    CustomTableComponent,
    GlobalErrorComponent,
    FilterJobsPipe,
    CustomModalComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzTableModule,
    NzModalModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}, DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
