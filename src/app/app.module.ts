import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MicrofrontSampleConfig } from 'projects/microfront-sample/src/lib/microfront-sample-config';
import { environment } from 'src/environments/environment';
import { MicrofrontSampleModule } from 'projects/microfront-sample/src/lib/microfront-sample.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { FirstComponentModule } from './first-component/first-component.module';

export const config: MicrofrontSampleConfig = {
  uriApi: environment.apiUrl,
  apiKrakenQLUrl: environment.apiUrlKrakenQL
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FirstComponentModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    MicrofrontSampleModule.forRoot(config)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
