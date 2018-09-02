import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import HomePageModule from './homePage/homePage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
