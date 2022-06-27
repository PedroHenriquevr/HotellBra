import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PhotoServiceService } from './services/photo-service.service';
import { PrincipalModule } from './principal/principal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrincipalModule,
    HttpClientModule
  ],
  providers: [PhotoServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
