import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DataTableModule } from '../../projects/data-table/src/public-api';
import { DataHeaderModule } from '../../projects/data-header/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTableModule,
    DataHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
