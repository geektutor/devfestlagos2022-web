import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    // RouterModule.,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
