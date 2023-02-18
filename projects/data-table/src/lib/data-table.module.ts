import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableComponent } from './data-table.component';

// import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    // DragulaModule.forRoot()
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
