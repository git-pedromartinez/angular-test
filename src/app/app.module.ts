import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAComponent } from './views/view-a/view-a.component';
import { ViewBComponent } from './views/view-b/view-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { StoreModule } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { appReducer } from './redux/state.reducers';

@NgModule({
  declarations: [AppComponent, ViewAComponent, ViewBComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ appState: appReducer }),
    LetDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
