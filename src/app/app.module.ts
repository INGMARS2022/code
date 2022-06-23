import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error/error.component';
import { UiModule } from './ui/ui.module';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatMomentDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    MatNativeDateModule, 
    //MatMoment
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
