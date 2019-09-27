import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { RandomComponent } from './components/random/random.component';
import { DeveloperComponent } from './components/developer/developer.component';
import {MaterialModule} from './material.module';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RandomComponent,
    DeveloperComponent,
    DialogBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
