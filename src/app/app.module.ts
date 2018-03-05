import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VgLoadingModule } from './VgLoadingSpinner';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    VgLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
