import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocalisationComponent,
    HomeComponent,
    JobComponent,
    SupportComponent,
    ContactComponent,
    TestComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
