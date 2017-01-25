import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import { PropertyTableComponent } from './property-table/property-table.component';

@NgModule({
  declarations: [
    PropertyTableComponent,
    NewPropertyComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
