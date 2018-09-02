import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import HomePageModule from './homePage/homePage.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule, HomePageModule,AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
