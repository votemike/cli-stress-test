import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import {PropertyService} from './property.service';
import { PropertySummaryComponent } from './property-summary/property-summary.component';
import { PropertyBlurbComponent } from './property-blurb/property-blurb.component';

@NgModule({
  declarations: [
    NewPropertyComponent,
    AppComponent,
    PropertySummaryComponent,
    PropertyBlurbComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
